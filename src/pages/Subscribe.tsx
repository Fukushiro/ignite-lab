import { gql, useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

// import { Container } from './styles';

const Subscribe: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    console.log(username, email);
    await createSubscriber({
      variables: {
        name: username,
        email,
      },
    });

    navigate("/event");
  }
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        {/* caixa da esquerda */}
        <div className="max-w-[640px] ">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa </strong>, do
            zero, com
            <strong className="text-blue-500"> React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        {/* caixa da direita */}
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="custom-input"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
            <input
              className="custom-input"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 "
            >
              Grarntir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/print.png" alt="" className="mt-10" />
    </div>
  );
};

export default Subscribe;
