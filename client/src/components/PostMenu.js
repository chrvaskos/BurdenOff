import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function PostMenu() {
  const [key, setKey] = useState("All");
  const history = useHistory();
  
  sessionStorage.setItem('key',key)  ;

  return (
    <Tabs
      id="category-tabs"
      activeKey={key}
      onSelect={(k) => {
        setKey(k);
        history.push('/posts');
      }}
    >
      <Tab eventKey="All" title="All Posts"></Tab>
      <Tab eventKey={1} title="Category 1"></Tab>
      <Tab eventKey={2} title="Category 2"></Tab>
      <Tab eventKey={3} title="Category 3"></Tab>
      <Tab eventKey={4} title="Category 4"></Tab>
    </Tabs>
  );
}

export default PostMenu;
