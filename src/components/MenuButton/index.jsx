import { Menu, MenuItem } from "@material-ui/core"
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons"
import { useState } from "react";
import { Button } from "../styled";
import { useHistory } from "react-router-dom"

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory()

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (link) => {
    setAnchorEl(null);
    
    if(!!link){
      history.push(link)
    }
  };

  return (
    <div>
      <Button
        onClick={handleClick}
      >
        Events {!anchorEl? <ArrowDropDown />: <ArrowDropUp />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>handleClose("wedding")}>Wedding</MenuItem>
        <MenuItem onClick={()=>handleClose("graduation")}>Graduation</MenuItem>
        <MenuItem onClick={()=>handleClose("confraternization")}>Confraternization</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuButton;