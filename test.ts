export const menuData = {
  menuItems: [
    {
      id: 1,
      title: "Services",
      parentId: null,
      secondaryMenuItems: [
        {
          id: 5,
          title: "Cloud computing",
          parentId: 1,
          tertiaryMenuItems: [
            {
              id: 9,
              title: "Cloud consulting",
              content:
                "Relational database services for MySQL, PostgerSQL, and SQL server.",
              parentId: 5,
            },
            {
              id: 10,
              title: "Cloud infrastructure analytics",
              content:
                "Health-specific solutions to enhance the patient experience.",
              parentId: 5,
            },
            {
              id: 11,
              title: "Hybrid Cloud",
              content:
                "Data storage, AI, and analytics solutions for government agencies.",
              parentId: 5,
            },
            {
              id: 12,
              title: "Hybrid Cloud",
              content:
                "Data storage, AI, and analytics solutions for government agencies.",
              parentId: 5,
            },
            {
              id: 13,
              title: "MultiCloud",
              content:
                "Data storage, AI, and analytics solutions for government agencies.",
              parentId: 5,
            },
          ],
        },
        {
          id: 6,
          title: "Dedicated servers",
          content: "Содержимое для Dedicated servers",
          parentId: 1,
          tertiaryMenuItems: [],
        },
        {
          id: 7,
          title: "Platform services",
          content: "Содержимое для Platform services",
          parentId: 1,
          tertiaryMenuItems: [],
        },
        {
          id: 8,
          title: "Information Security",
          content: "Содержимое для Information Security",
          parentId: 1,
          tertiaryMenuItems: [],
        },
      ],
    },
    {
      id: 2,
      title: "Managed IT",
      parentId: null,
      secondaryMenuItems: [],
    },
    {
      id: 3,
      title: "Telekom Solutions",
      parentId: null,
      secondaryMenuItems: [],
    },
    {
      id: 4,
      title: "About Us",
      parentId: null,
      secondaryMenuItems: [],
    },
  ],
};

// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import { ArrowRightIcon } from "@public/icons";
// import { useAppDispatch, useAppSelector } from "@redux/hooks";
// import { toggleMainMenu, toggleSecondaryMenu } from "@redux/features/menuSlice";

// const MainMenu: React.FC = () => {
//   const mainMenu = useAppSelector(state => state.menuReducer.menuItems);
//   const isSecondaryMenuOpen = useAppSelector(
//     state => state.menuReducer.isSecondaryMenuOpen
//   );
//   const dispatch = useAppDispatch();

//   const [selectedMenuItem, setSelectedMenuItem] = useState(null);

//   const handleClick = () => {
//     dispatch(toggleSecondaryMenu());
//   };

//   const handleMenuItemClick = menuItem => {
//     setSelectedMenuItem(menuItem.id);
//     dispatch(toggleSecondaryMenu());
//   };

//   return (
//     <div className="max-w-[360px] w-full p-5">
//       <Header />
//       <div className="flex justify-between h-[calc(100vh-8rem)] flex-col">
//         {!isSecondaryMenuOpen ? (
//           <>
//             <ul className="max-w-[300px]">
//               {mainMenu.map(item => (
//                 <li
//                   className="font-medium py-3 text-[22px] leading-8 cursor-pointer"
//                   key={item.id}
//                   onClick={() => handleMenuItemClick(item)}
//                 >
//                   <div className="flex_between">
//                     <div>{item.title}</div>
//                     <ArrowRightIcon />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <div className="font-medium text-[22px] leading-8">
//               <div className="py-3">Контакты</div>
//               <div className="py-3">Поиск</div>
//             </div>
//           </>
//         ) : (
//           <ul className="max-w-[300px]">
//             {mainMenu.map(item => {
//               if (
//                 selectedMenuItem === item.id &&
//                 item.secondaryMenuItems.length > 0
//               ) {
//                 return item.secondaryMenuItems.map(secondaryItem => (
//                   <li
//                     className="font-medium py-3 text-[22px] leading-8 cursor-pointer"
//                     key={secondaryItem.id}
//                     onClick={handleClick}
//                   >
//                     <div className="flex_between">
//                       <div>{secondaryItem.title}</div>
//                       <ArrowRightIcon />
//                     </div>
//                   </li>
//                 ));
//               }
//               return null;
//             })}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainMenu;
