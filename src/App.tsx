
import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'
import bgvideo from '../src/assets/bgvid.mp4'
// import './App.css'

function App() {
 
  return (
    <>
    <div>
      <video autoPlay loop muted playsInline className='absolute right-0 bottom-0 border border-red-700' >
        <source src='../src/assets/bgvid.mp4' type='video'/>
      </video>
    </div>
    <header className='flex justify-evenly items-center shadow-md py-2'>
     <div className='border-4 text-2xl'>Jio</div>
     <ul className='flex gap-4 font-semibold'>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>Projects</a></li>
      <li><a href='#'>About Me</a></li>
      
     </ul>
     <button className='shadow-md hover:bg-gray-300 border-none'>Contact Me</button>
    </header>
    {/* Intro section */}
    <section>

    </section>
    {/* About Me Section */}
    <section>

    </section>
    {/* Project Section */}
    <section>

    </section>
    </>
  ) 
}

export default App
