import "./topbar.scss"

const Topbar = ({open,setOpen}) => {


  
  return (
    <div className={"topbar "+ (open && "active")}>

<div className="wrapper">
  <div className="left">
    <a href="#intro" className="logo">Shivam</a>
  </div>
  <div className="right">
<div className="hamb" onClick={()=>setOpen(!open)}>
  <span className="line1"></span>
  <span className="line2"></span>
  <span className="line3"></span>
</div>

  </div>
</div>

    </div>
  )
}

export default Topbar