import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginPage() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const ctx = useContext(AuthContext); //{user,setUser}

  const navigate = useNavigate();
  //before update state we NEED TO CLONE by {...name} value every time / bc they will assign new reference.
  const handleChangeInput = (event) =>
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5555/auth/login", input)
      .then((res) => {
        console.log(res.data.accessToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        ctx.setUser(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Login failed");
      });
  };

  return (
    <form
      className="flex flex-col gap-4 bg-gray-200 p-4 rounded-md"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue"
          value={input.username}
          onChange={handleChangeInput}
          //{...input} clone previous value from input
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          name="password"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <button className="bg-orange-400 px-3 py-1.5 text-white rounded-md">
        Sign in
      </button>
    </form>
  );
}
