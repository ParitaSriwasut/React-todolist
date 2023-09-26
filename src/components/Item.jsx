export default function Item() {
  return (
    <li className="flex justify-between border border-gray-300 bg-white px-3 py-4 mb-0.5 rounded-md">
      <span>Todo</span>
      <div className="flex gap-2">
        <button className="bg-orange-400 px-3 py-1.5 text-white rounded-md">
          Edit
        </button>
        <button className="bg-red-500 px-3 py-1.5 text-white rounded-md">
          Delete
        </button>
      </div>
    </li>
  );
}
