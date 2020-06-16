import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import {ic_create} from 'react-icons-kit/md/ic_create'
import {smallRight} from 'react-icons-kit/entypo/smallRight'
import styled from "styled-components";

class CreatePost extends Component {
  render() {
    return (
      <StyledDiv>
        <InputGroup
          size="lg"
          className="mt-3 mb-4 mx-1"
          style={{ cursor: "default" }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text
              id="inputGroup-sizing-lg m-0"
              style={{ fontSize: "1.05rem" }}
            >
              <Icon icon={ic_create} size="20" className="mr-1 mb-1"/>
              Post
              <Icon icon={smallRight} size="26" className="ml-3"/>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Link to="/submit" className="text-decoration-none">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Click here to create a post!"
              className="widthControl"
              style={{ fontSize: "1.05rem" }}
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
    width: 42em;
    @media only screen and (max-width: 1200px) {
      width: 34em;
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
