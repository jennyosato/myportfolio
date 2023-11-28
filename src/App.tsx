import { useRef, useState } from "react";
// import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'
import bgvideo from "../src/assets/bgvid.mp4";
import Contact_form from "./components/contact_form";

function App() {
  const [isOpen, setIsopen] = useState(false)
  const vidref = useRef<HTMLVideoElement>(null);
  const playBack = () => {
    vidref.current.playbackRate = 0.5;
  };

  return (
    <>
      <video
        ref={vidref}
        onCanPlay={playBack}
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover left-0 top-0 w-full -z-10 h-screen"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <header className="flex justify-evenly items-center shadow-md py-2 bg-black/60">
        <div className="border-4 text-2xl">Jio</div>
        <ul className="flex gap-4 font-semibold">
          <li>
            <a href="#" className="text-slate-600 font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#about_me">About Me</a>
          </li>
        </ul>
        <button
        onClick={() => setIsopen(true)} className="shadow-md hover:bg-gray-300 border-none outline-none focus:outline-none">
          Contact Me
        </button>
      </header>
      <Contact_form onOpen={isOpen} onClick={() => setIsopen(false)} />
      {/* Intro section */}
      <section className="bg-black/90 h-screen w-full flex justify-center items-center ">
        <div className="w-8/12 h-72 filt rounded bg-white/20 text-center p-8 text-white">
          <h2>Hello there!</h2>
          <p>My name is Jennifer, i am a frontend developer</p>
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
      </section>
    </>
  );
}

export default App;
