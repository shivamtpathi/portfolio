import { useState } from "react";
import "./work.scss";
import data from "./workItem"
const Work = () => {
const HandleClick=(arrow)=>{
arrow ==="left" ? ss(cs > 0 ? cs-1 : 1) :
ss(cs< data.length -1 ? cs+1 : 0); 


}

  const [cs , ss]=useState(0)
  return (
    <div className="work" id="work">
      <div className="slider"
      style={{transform:`translateX(-${cs * 100}vw)`}}>
      {data.map((d)=>
        


        <div className="container" key={d.key}>
       
          <div className="item">


            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="web" />
                </div>
                
                <h2 >{d.tittle  } </h2>

                <p>
                 {d.para}
                </p>
                <a href={d.link}><span  style={{color:"green"}}>{d.btn}</span></a>
              </div>
            </div>
            <div className="right">
              <img src={d.theme}alt="fweb" />
            </div>
           



          </div>
        </div>
       

        )}
      </div>

      <img src={require("../../images/down.png")} alt="arrow" className="right-arrow" onClick={()=>HandleClick()} />
      <img src={require("../../images/down.png")} alt="arrow" className="left-arrow" onClick={()=>HandleClick("left")} />
    </div>
  );
};

export default Work;
