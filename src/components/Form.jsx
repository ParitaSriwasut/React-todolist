// import { useState } from "react";
// import axios from "axios";

// export default function Form({ setTodos }) {
//   const [input, setInput] = useState("");
//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     //VALIDATE HARE
//     axios
//       .post(
//         "http://localhost:5555/todo",
//         { title: input },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       )
//       .then((res) => {
//         console.log("successfully!");
//         setInput("");
//         //SEND REQ TO SERVER BY AXIOS
//         setTodos((prev) => [...prev, res.data.todo])
//         .catch((err) =>{console.log(err)}
//     return (
//       <form className="flex gap-2" onSubmit={handleSubmitForm}>
//         <input
//           type="text"
//           className="outline-none px-3 py-1.5 border rounded-md flex-grow"
//           value={input}
//           onChange={(event) => setInput(event.target.value)}
//         />
//         <button className="bg-orange-400 px-3 py-1.5 text-white rounded-md ">
//           Create
//         </button>
//       </form>
//     );
//   }

import { useState } from "react";
import axios from "axios";

export default function Form({ setTodos }) {
  const [input, setInput] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Validate

    // key title ตรงกับ หลังบ้าน : value = state input
    // post(url,req)
    axios
      .post(
        "http://localhost:5555/todo",
        { title: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log("success");
        setInput("");

        // create อัพเดท ทันที ควรไปทำฟังชั่น เพื่อ reuse code
        // new Todo Obj => res.data.todo // **เพิ่มเข้าไป state เก่า
        setTodos((prev) => [...prev, res.data.todo]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="flex gap-2" onSubmit={handleSubmitForm}>
      <input
        type="text"
        className="outline-none px-3 py-1.5 border rounded-md flex-grow"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="bg-orange-500 px-3 py-1.5 text-white rounded-md ">
        Create
      </button>
    </form>
  );
}
