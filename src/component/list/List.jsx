import Item from "../listitem/Item";

import NavItem from "../navitem/NavItem";

const List = ({setOpen}) => {
  return (
    <>
      {Item.map((i) => {
        return <NavItem ids={i.id} nam={i.names} setOpen={setOpen} key={i.uid} />;
      })}
    </>
  );
};

export default List;
