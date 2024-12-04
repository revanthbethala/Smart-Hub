import Hero from "./Hero"

function Home() {
   return (
      <header>
         <nav className="flex justify-around items-center py-5 px-4 capitalize cursor-pointer bg-blue-300">
            <h1 className="font-bold uppercase text-2xl font-Parkinsans tracking-wider">Smart Hub</h1>
            <ul className="flex flex-row gap-5 justify-center items-center font-medium text-xl  font-Inter">
               <li><a href="#home">home</a></li>
               <li><a href="#products">products</a></li>
               <li><a href="#about">about</a></li>
               <li><a href="#contact">contact</a></li>
            </ul>
         </nav>
         <Hero />
      </header>


   )
}

export default Home