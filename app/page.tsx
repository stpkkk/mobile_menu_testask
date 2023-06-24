"use client";
import { Menu } from "@/components";
import { BurgerMenuIcon } from "@public/assets/icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { toggleMainMenu } from "@redux/features/menuSlice";

export default function Home() {
  const isMenuOpen = useAppSelector(state => state.menuReducer.isMenuOpen);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleMainMenu());
  };

  return (
    <main className="max-h-screen">
      {isMenuOpen ? (
        <Menu />
      ) : (
        <div
          className={`p-5 duration-1000 transition-all ease-out cursor-pointer ${
            isMenuOpen ? "-translate-x-full" : "translate-x-0"
          }`}
          onClick={handleClick}
        >
          <BurgerMenuIcon />
        </div>
      )}
    </main>
  );
}
