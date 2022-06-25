import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";
// import { Container } from './styles';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson: React.FC<LessonProps> = (props) => {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE ' • ' d ' de ' MMMM  ' . ' k'h'mm ",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson && "bg-green-500"
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm ${
                isActiveLesson ? "text-white" : "text-blue-500"
              } font-medium flex flex-row gap-2`}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span
              className={`text-sm "text-orange-500 font-medium flex flex-row gap-2`}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded py-[0.125rem] px-2 text-white border ${
              isActiveLesson ? "border-white" : "border-green-300"
            } font-bold`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong
          className={`${
            isActiveLesson ? "text-white" : "text-gray-200"
          } mt-5 block`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
