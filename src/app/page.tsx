'use client'
import Nav from "./nav";
import ShowCard from "./cardInfo";
import Chart from "./chart";
import Project from "./projects";
import EndPage from "./footer";
import Aside from "./aside"
import Option from "./option"
import Store from "./context/store";

  


export default function Home() {



   return (
      <>
      <Store>
         <Nav />
         <Aside />
         <Option />
         <ShowCard />
         <Chart />
         <Project />
         <EndPage />
      </Store>

   
      </>
   );
}
