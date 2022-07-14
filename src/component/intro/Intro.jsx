

import Typewriter from "typewriter-effect";
import "./intro.scss"

const Intro = () => {

  return (
    <div className="intro" id="intro">

<div className="left">
<div className="imgContainer">
<img src="images/shivam.png" alt="shivam" />


</div>


</div>
<div className="right">

<div className="wrapper">
  <h2>Hi There, i'm</h2>
  <h1>Shivam Tripathi</h1>
  <h3>Developer <span ><Typewriter
  options={{
    strings: ['Designer', 'Programmer','YouTuber','Gamer'],
    autoStart: true,
    loop: true,
  }}
/>
  
  </span></h3>
</div>

<a href="#about"><img src="images/down.png" alt="arrowpng" /></a>
</div>



    </div>
  )
}

export default Intro;