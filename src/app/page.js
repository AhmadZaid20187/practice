import Image from "next/image";
import Todo from "./components/Todo";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-2xl">The thing I have to done:</h2>
      <Todo name="Riview" />
      <Todo name="Learn" />
      <Todo name="Practice" />
    </div>
  );
}
