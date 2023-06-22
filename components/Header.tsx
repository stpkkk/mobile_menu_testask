import React, { Dispatch, SetStateAction } from "react";
import DropdownMenu from "./DropdownMenu";
import { CloseIcon } from "@public/icons";

type Props = {
  setOpenedMenu: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setOpenedMenu }) => {
  return (
    <div className="flex_between mb-16">
      <DropdownMenu />
      <div className="cursor-pointer" onClick={() => setOpenedMenu(false)}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Header;
