import React from "react";
import { CloseIcon } from "@public/assets/icons";
import { useAppDispatch } from "@redux/hooks";
import { resetMenu, toggleMenu } from "@redux/features/menuSlice";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleMenu());
    dispatch(resetMenu());
  };

  return (
    <div className="flex_between mb-5 p-5">
      <LanguageSwitcher />
      <div className="cursor-pointer" onClick={handleClick}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Header;
