import Form from "../Form";
import List from "../List";
export default function HomePage() {
  return (
    <section className="flex flex-col gap-4">
      <Form />
      <List />
    </section>
  );
}
