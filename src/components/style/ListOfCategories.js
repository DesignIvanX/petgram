import styled, { css } from "styled-components";
import { fadeIn } from "./Animation";
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  ${(props) =>
    props.fixed &&
    css`
       {
        ${fadeIn()}
        position: fixed;
        top: -20px;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        margin: 0 auto;
        max-width: 320px;
        padding: 5px;
        transform: scale(0.5);
        z-index: 1000;
      }
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
