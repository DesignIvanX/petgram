import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Content = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 6px rgba(58, 57, 68, 0.2);
`;
export const Link = styled(LinkRouter)`
  display: block;
  text-decoration: none;
  color: #2e2e2e;
  margin: 20px 0;
  font-size: 0.9rem;
`;
export const Img = styled.img`
  height: 200px;
  width: 250px;
`;
export const Paragraph = styled.p`
  color: #2e2e2e;
  font-size: 1rem;
  text-align: center;
  margin: -30px 0 20px 0;
`;
