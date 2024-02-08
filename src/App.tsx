
function App() {
  
  

  return (
    <>
    
      <header className="flex justify-evenly items-center shadow-md py-6 bg-black/60">
        <div className="border-4 text-2xl">Jio</div>
        <ul className="flex items-center  gap-6 font-semibold">
          <li>
            <a href="#" className="text-white text-xl font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xl font-bold">
              Projects
            </a>
          </li>
          <li>
            <a href="#about_me" className="text-white text-xl font-bold">
              About Me
            </a>
          </li>
        </ul>
       
      </header>
      <section>
        <div className="w-20 h-20 rounded-full bg-black/50 animate-bubble">

        </div>
      </section>
      {/* Intro section */}
      <section className="bg-black/90 h-screen w-full flex items-center  px-20">
        
        <div>
          <h2>Hello there!</h2>
          <span className="capitalize animate-typing text-4xl font-bold overflow-hidden border-r-[.15em] border-blue-500">
            My name is Jennifer, <br/>i am a frontend developer
          </span>
        </div>
   

      </section>
      {/* About Me Section */}
      <section id="about_me" className="py-10 ">
        <div className=" w-8/12 flex flex-col justify-center mx-auto bg-slate-900 text-center p-8 text-white">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="text-sm tracking-wide leading-relaxed font-extralight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            saepe fugiat recusandae voluptatibus quis quidem quam nam corporis
            qui at eaque unde architecto dolore officiis voluptatem ipsam, minus
            repellendus officia iste voluptate. Cupiditate consectetur itaque ut
            omnis iste impedit earum ex beatae voluptate in harum, nihil officia
            repudiandae labore eveniet!
          </p>
        </div>
      </section>
      {/* Project Section */}
      <section>
        <div>
          <h2>ForFoods</h2>
        </div>
        <div>
          <h2>ForStore</h2>
        </div>
        <div>
          <h2>Showcaze</h2>
        </div>
        <div>
          <h2>ChatMe</h2>
        </div>
        <div>
          <h2>ForMovies</h2>
        </div>
        <div>
          <h2>Listore</h2>
        </div>
        <div>
          <h2>JapaAuction</h2>
        </div>
      </section>
    </>
  );
}

export default App;
