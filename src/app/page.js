import Image from "next/image";
import Todo from "./components/Todo";
import Actor from "./components/Actor.jsx";

export default function Home() {

  const actors = ["amir khan", "nayok khan", "ami khan"]
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      {
        actors.map(actor => <Actor actor={actor} key={actor}></Actor>)
      }


      {/* <h2 className="text-2xl">The thing I have done:</h2> */}

      {/* Learning params or props */}
      {/* <div className="pt-2">
        <Todo name="Riview" isDone={true} />
        <Todo name="Learn" isDone={false} />
        <Todo name="Practice" isDone={true} />
      </div> */}
    </div>
  );
}
