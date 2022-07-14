


const NavItem = ({ids,nam,setOpen}) => {
  return (
    <div><li>
    <a href={"#"+(ids)} onClick={()=>setOpen(false)} > {nam} </a>
</li>


</div>
  )
}

export default NavItem