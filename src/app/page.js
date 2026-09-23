import Image from "next/image";
import Todo from "./components/Todo";
import Actor from "./components/Actor.jsx";
import Count from "./components/Count";
import PlayerCount from "./components/PlayerRuns";
import Btn from "./components/Btn";
import Users from "./components/Users";
import { Suspense } from "react";

export default function Home() {

  // const actors = ["amir khan", "nayok khan", "ami khan"]
  // const actors = [

  //   {
  //     id: 1,
  //     name: "amir khan",
  //     age: 56,
  //   },
  //   {
  //     id: 2,
  //     name: "nayok khan",
  //     age: 67,
  //   },
  //   {
  //     id: 3,
  //     name: "ami khan",
  //     age: 89
  //   }

  // ]

  const user = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <Suspense fallback={<h3 className="text-3xl font-semibold">Loading......</h3>}>

        <Users user={user} />

      </Suspense>




      <PlayerCount></PlayerCount>


      <Count></Count>

      <Btn></Btn>









      {/* <h2 className="text-5xl font-bold">Actors Name:</h2>
      {
        actors.map(actor => <Actor key={actor.id} actor={actor} ></Actor>)
      } */}


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
