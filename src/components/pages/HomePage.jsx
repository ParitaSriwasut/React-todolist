import { useEffect, useState } from "react";
import Form from "../Form";
import List from "../List";
import axios from "axios";
export default function HomePage() {
  const [todos, setTodos] = useState([]);

  // const createTodo = () => {};

  useEffect(() => {
    axios
      .get("http://localhost:5555/todo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <Form setTodos={setTodos} />
      <List todo={todos} />
    </section>
  );
}
