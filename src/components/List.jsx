import Item from "./Item";

export default function List(props) {
  console.log(props);
  return (
    <ul className="flex flex-col gap-2">
      {props.todo.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </ul>
  );
}
