import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

function PostMenu() {
  const [key, setKey] = useState("All");

  console.log(`to key einai: ${key}`);
  
  return (
    
    <Tabs id="category-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="All" title="All Posts"></Tab>
      <Tab eventKey="1" title="Category 1"></Tab>
      <Tab eventKey="2" title="Category 2"></Tab>
      <Tab eventKey="3" title="Category 3"></Tab>
      <Tab eventKey="4" title="Category 4"></Tab>
    </Tabs>
    
  );
}

export default PostMenu;
