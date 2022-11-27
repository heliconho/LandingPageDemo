import React from "react";

const SubNavbar = () => {
  const items = [
    { id: 1, name: " 活動及聚會美食 " },
    { id: 2, name: " Party Room " },
    { id: 3, name: " 場地租用 " },
    { id: 4, name: " 禮物 " },
  ];
  return (
    <div className="border-t-2 items-center flex w-full">
      <div className="px-3 py-3 ml-sm-2 my-auto flex">全部分類</div>
      <ul className="navbar-nav flex-row rb-hoverable-navbar rb-hide-icon">
        {items.map((item) => (
          <li
            key={item.id}
            className="dropdown mx-2 hover:bg-yellow-50 hover:rounded-md"
          >
            <a className="nav-link">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
