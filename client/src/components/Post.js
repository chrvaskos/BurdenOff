import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import globalVariables from "../util/globalVariables";
import UserProfile from "../util/UserProfile";



class Post extends Component {
  constructor() {
    super();
    this.state = {
      postArray: [],
      posts:[],
      verified:UserProfile.getVerified()
    };
  }

  componentDidMount() {
    
    fetch(`/api/posts/${this.state.verified}`)
      .then((res) => res.json())
      .then((postArray) =>
        this.setState({ postArray })
        
      );


  }


  
  render() {
    let currentKey=globalVariables.getKey();
    this.state.posts=[];    
    if(currentKey==="All"){
      this.state.posts=this.state.postArray;
    }else{
      for(let i=0;i<this.state.postArray.length;i++){
        if(this.state.postArray[i].category===parseInt(currentKey)){
          this.state.posts.push(this.state.postArray[i]);
        }
      }
    }
    
    
    return (
      <div>
        
        {this.state.posts.map((post) => (
          <Card key={post.id} className="my-3 mx-1">
            <Card.Header>{post.title}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item variant="light" className="text-dark">
                Problem: {post.content}
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                Solution: {post.solution}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    );
  }
}

export default Post;
