import Topbar from "./component/topbar/Topbar"
import About from "./component/about/About"
import Contact from "./component/contact/Contact"
import Intro from "./component/intro/Intro"
import Projects from "./component/projects/Projects"
import Skill from "./component/skill/Skill"
import Work from "./component/work/Work"
import Menu from "./component/menu/Menu"




import "./App.scss"
import { useState } from "react"


const App = () => {

const [open,setOpen]=useState(false)

  return (
    <div className="app">
      <Topbar open={open} setOpen={setOpen} />
      <Menu  open={open} setOpen={setOpen} />
      <div className="section">
        <Intro/>
        <About/>
        <Skill/>
        <Work/>
        <Projects/>
        <Contact/>
        
        
        
      </div>
    </div>
  );
};

export default App
