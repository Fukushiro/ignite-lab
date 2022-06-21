import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";
interface Lesson {
  id: string;
  title: string;
}
function App() {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `;
  const { data } = useQuery<{ lessons: Array<Lesson> }>(GET_LESSONS_QUERY);
  // useEffect(() => {
  //   client.query({ query: GET_LESSONS_QUERY }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <ul>
      {data?.lessons.map((lesson, index) => {
        return <li key={index}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
