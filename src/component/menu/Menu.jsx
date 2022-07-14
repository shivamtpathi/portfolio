
import "../list/List"
import List from "../list/List"
import "./menu.scss"


const Menu = ({open,setOpen}) => {
  return (
    <div className={"menu "+ (open && "active")}>
        <ul>
           <List setOpen={setOpen} />
        </ul>
    </div>
  )
}

export default Menu