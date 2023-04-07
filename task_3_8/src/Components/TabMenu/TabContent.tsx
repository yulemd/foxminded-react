import React from "react";

interface IProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}
 
export const TabContent: React.FC<IProps> = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="tab">
     { children }
   </div>
   : null
 );
};