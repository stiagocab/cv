import React from "react";
import styled from "@emotion/styled";

export default function DownToComponent({action}) {
   return (
      <ArrowContent>
         <button onClick={action}>&#10095;</button>
      </ArrowContent>
   );
}

DownToComponent.defaultProps = {
   action: () => {},
};

const ArrowContent = styled.div`
   width: 100%;
   height: ${(props) => props.height || "10vh"};
   background: transparent;
   display: flex;
   justify-content: center;
   align-items: center;

   & button {
      background: transparent;
      transform: rotate(90deg);
      font-size: 2em;
      outline: none;
      border: none;
      color: ${(props) => props.theme.primary};
      transition: all 420ms linear;

      &:active {
         transform: rotate(90deg) scale(0.9);
         transition: all 420ms linear;
      }

      &:hover {
         &::before {
            content: "\\0276F";
            opacity: 0.3;
         }
      }
   }
`;
