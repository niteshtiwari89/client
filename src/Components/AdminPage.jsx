import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DashBoard from "./DashBoard.jsx";
import Class from "./Class.jsx";
import Material from './Material.jsx';
import Session from './Session.jsx';



export default function AdminPage() {
  return (
    <>
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <DashBoard/>
      </Tab>
      <Tab eventKey="profile" title="Classes">
        <Class/>
      </Tab>
      <Tab eventKey="longer-tab" title="Material">
        <Material/>
      </Tab>
      <Tab eventKey="contact" title="Session" >
        <Session/>
      </Tab>
    </Tabs>
    </>
  );
}

