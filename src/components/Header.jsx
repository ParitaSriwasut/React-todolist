import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-blue-200">
        <h1 className="font-bold text-2xl">Todo List App</h1>
        <ul className="flex gap-5 font-semibold">
          <li className="hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/login">Log in</Link>
          </li>
          <li className="hover:cursor-pointer">Log out</li>
          <li className="hover:cursor-pointer">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
