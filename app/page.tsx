"use client";
import { Menu } from "@/components";
import { BurgerMenuIcon } from "@public/icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toggleMainMenu } from "@redux/features/menuSlice";

export default function Home() {
  const isMainMenuOpen = useAppSelector(
    state => state.menuReducer.isMainMenuOpen
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleMainMenu());
  };

  return (
    <main>
      {isMainMenuOpen ? (
        <Menu />
      ) : (
        <div
          className={`p-5 duration-1000 transition-all ease-out cursor-pointer ${
            isMainMenuOpen ? "-translate-x-full" : "translate-x-0"
          }`}
          onClick={handleClick}
        >
          <BurgerMenuIcon />
        </div>
      )}
    </main>
  );
}
