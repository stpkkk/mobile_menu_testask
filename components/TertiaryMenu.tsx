import React from "react";
import { useAppSelector } from "@redux/hooks";

const TertiaryMenu: React.FC = () => {
  const tertiaryMenuItems = useAppSelector(
    state => state.menuReducer.tertiaryMenuItems
  );
  return (
    <>
      <div className="border-b-[1px] border-grayLine mt-5 opacity-70" />
      <ul>
        {tertiaryMenuItems.map(item => (
          <li className="cursor-pointer py-5" key={item.id}>
            <div className="">
              <div className="font-medium text-[16px] leading-6">
                {item.title}
              </div>
              <div className="text-[12px] leading-5 text-gray">
                {item.content}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TertiaryMenu;
