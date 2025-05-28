import Encryption from '@/app/components/main/Encryption'
import Footer from '@/app/components/main/Footer'
import Hero from '@/app/components/main/Hero'
import Navbar from '@/app/components/main/Navbar'
import Projects from '@/app/components/main/Projects'
import Skills from '@/app/components/main/Skills'


function App() {

  return (
    <div className='h-full w-full  '>
      < Navbar />
       <div className='flex flex-col  gap-20'>
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer /> 
       </div>
    </div>
  )
}

export default App
