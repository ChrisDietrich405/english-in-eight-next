"use client";
import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Dropdown from "../Dropdown";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const SubmenuDropdown = ({ dropdown, title }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  return (
    <React.Fragment>
      <div
        disableFocusRipple={true}
        id={title}
        aria-controls={popupState.isOpen ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={popupState.isOpen ? "true" : undefined}
        variant="contained"
        disableelevation="true"
        {...bindHover(popupState)}
      >
        {title}
        <KeyboardArrowDownIcon
          className={{
            "menu-chevron": true,
            "menu-chevron--active": popupState.isOpen,
          }}
        />
      </div>
      <HoverMenu
        open
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Dropdown dropdownProps={dropdown} />
      </HoverMenu>
    </React.Fragment>
  );
};

export default SubmenuDropdown;

