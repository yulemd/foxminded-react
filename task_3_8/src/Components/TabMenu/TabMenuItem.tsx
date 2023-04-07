import React from "react";

interface IProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const TabMenuItem: React.FC<IProps> = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
    <li 
      onClick={handleClick} 
      className={`userTabs__${id} ${activeTab === id 
        ? "userTabs__link-active" 
        : ""}`}
    >
      { title }
    </li>
  );
};