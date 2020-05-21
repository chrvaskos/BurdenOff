import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components'

class CreatePost extends Component {
  render() {
    return (
      <StyledDiv>
        <InputGroup size="lg" className="mt-3 mb-4 mx-1" style={{cursor: "default"}}>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">
              Create a post
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Link to="/submit" className="text-decoration-none">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Click to create a post!"
              className = "widthControl"
            />
          </Link>
        </InputGroup>
      </StyledDiv>
    );
  }
}

export default CreatePost;

const StyledDiv = styled.div`
  .widthControl {
    height: 3em;
    width: 44em;
    @media only screen and (max-width: 1200px) {
      width: 36em;
    }
    @media only screen and (max-width: 992px) {
      width: 24em;
    }
    @media only screen and (max-width: 768px) {
      width: 16em;
    }
    @media only screen and (max-width: 576px) {
      width: 14em;
    }
  }
`;