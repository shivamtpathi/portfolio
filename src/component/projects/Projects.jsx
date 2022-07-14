import Pdata from "./Pdata"



import "./projects.scss"

const Projects = () => {
  return (
    <div className="projects"  id="projects">
      <h2>Projects</h2>
<div className="container">
 { Pdata.map((d)=>(


<a href={d.link} target="__blank" key={d.key}>
<div className="card"  >
  <div className="top">
<h2>{d.name}</h2>
  </div>
  <div className="center">
<img src={d.image} alt="game" />
  </div>
  <div className="bottom">
<div className="des"><p>{d.para}</p></div>

  </div>
</div>
</a>

))}


</div>



    </div>
  )
}

export default Projects