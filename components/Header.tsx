import React, { Dispatch, SetStateAction } from "react";
import DropdownMenu from "./DropdownMenu";
import { CloseIcon } from "@public/icons";
import { useAppDispatch } from "@redux/hooks";
import { resetMenu, toggleMainMenu } from "@redux/features/menuSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleMainMenu());
    dispatch(resetMenu());
  };

  return (
    <div className="flex_between mb-16">
      <DropdownMenu />
      <div className="cursor-pointer" onClick={handleClick}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Header;
