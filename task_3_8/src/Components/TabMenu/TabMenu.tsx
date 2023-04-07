import React, { useState } from 'react';
import "./TabMenu.css";
import { UserInfo } from '../UserInfo';
import { UserPosts } from '../UserPosts';
import { UserTodos } from '../UserTodos';
import { UserAlbums } from '../UserAlbums';
import { TabMenuItem } from './TabMenuItem';
import { TabContent } from './TabContent';


export const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="tab">
      <ul className="userTabs">
        <TabMenuItem 
          title="INFO" 
          id="info" 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
        <TabMenuItem 
          title="POSTS" 
          id="posts" 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
        <TabMenuItem 
          title="TODOS" 
          id="todos" 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
        <TabMenuItem 
          title="ALBUMS" 
          id="albums" 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="tab">
        <TabContent id="info" activeTab={activeTab}>
          <UserInfo />
        </TabContent>
        <TabContent id="posts" activeTab={activeTab}>
          <UserPosts />
        </TabContent>
        <TabContent id="todos" activeTab={activeTab}>
          <UserTodos />
        </TabContent>
        <TabContent id="albums" activeTab={activeTab}>
          <UserAlbums />
        </TabContent>
      </div>
    </div>
  );
}