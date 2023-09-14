"use client"
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserServiceHistory from './UserServiceHistory';

const UserHistory = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className='md:mt-16'>
      <h2 className='text-center text-3xl font-bold mb-12'>User History</h2>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Service Booking History</Tab>
          <Tab>Product Buying History</Tab>
        </TabList>

        <TabPanel>
          <div><UserServiceHistory/></div>
        </TabPanel>
        
        <TabPanel>
          <div>User Service Booking History Content</div>
          {/* Place the content for User Service Booking History here */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserHistory;
