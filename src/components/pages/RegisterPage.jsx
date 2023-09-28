import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  username: Joi.string().min(3).max(40).required(),
  password: Joi.string().min(6).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  //Browser will execute(handleSubmitForm) and pass event to the function
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const { error } = schema.validate(
      {
        username,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );
    if (error) {
      console.dir(error);
      // error.details
      //loop though error output must be an object{}
      //{username:"\"username\" is not allowed to be empty. \"password\" is not allowed to be empty"}
      //setError

      const nextError = {
        username: "",
        password: "",
        confirmPassword: "",
      };
      for (let item of error.details) {
        nextError[item.path[0]] = item.message;
      }
      return setError(nextError);
    }
    setError({
      username: "",
      password: "",
      confirmPassword: "",
    });

    setIsLoading(false);
    //axios.post return value to promise / will success when server return (200,201) /if not will return 400
    axios
      .post("http://localhost:5555/auth/register", {
        username,
        password,
        confirmPassword,
      })
      .then(() => {
        window.alert("success registration");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    //abortEarly:false => will validate every value
    // console.log("value", value);
    //console.log("error", error); //if not error output will be undefined
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
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue ${error.username} ? 'border-red-600 focus:ring-red-600' : 'focus:to-blue-600'}`}
        />
        {error.username && (
          <span className="text-red-600 text-xs">{error.username}</span>
        )}
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue ${error.password} ? 'border-red-600 focus:ring-red-600' : 'focus:to-blue-600'}`}
        />
        {error.password && (
          <span className="text-red-600 text-xs">{error.password}</span>
        )}
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue ${error.confirmPassword} ? 'border-red-600 focus:ring-red-600' : 'focus:to-blue-600'}`}
        />
        {error.confirmPassword && (
          <span className="text-red-600 text-xs">{error.confirmPassword}</span>
        )}
      </div>
      <button className="bg-orange-400 px-3 py-1.5 text-white rounded-md">
        Sign up
      </button>
    </form>
  );
}
