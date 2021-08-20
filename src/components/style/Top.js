import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Content = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 6px rgba(58, 57, 68, 0.2);
`;

export const Link = styled(LinkRouter)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  margin: 0 -50px;
  text-decoration: none;
`;
