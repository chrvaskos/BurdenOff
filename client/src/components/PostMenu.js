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
      <Tab eventKey={"Anxiety"} title="Anxiety"></Tab>
      <Tab eventKey={"Depression"} title="Depression"></Tab>
      <Tab eventKey={"Family"} title="Family"></Tab>
      <Tab eventKey={"Relationships"} title="Relationships"></Tab>
      <Tab eventKey={"Other"} title="Other"></Tab>
    </Tabs>
  );
}

export default PostMenu;
