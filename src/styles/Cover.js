import styled from "@emotion/styled";
import {keyframes} from "@emotion/core";

export const CoverStyled = styled.section`
   height: 90vh;
   width: 100%;
   overflow: hidden;
   position relative;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   padding: 100px 2em;  
   box-sizing: border-box;

   & .triangle{
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 999;
   }
   @media screen and (max-width: 600px) {
      padding: 3em 1em;  

      & .triangle {
        left: -3em;
        right:initial;
      }
   }
`;
export const TitlePage = styled.h1`
   margin-top: 0;
   color: white;
   font-size: 2.5em;
   user-select: none;
   font-weight: bold;
   position: relative;
   margin-bottom: 0.3em;
   box-sizing: border-box;
   z-index: 1000;

   @media screen and (max-width: 600px) {
      font-size: 1.6em;
   }
`;
export const SubtitlePage = styled.h2`
   margin-top: 0;
   color: white;
   font-size: 1.3em;
   user-select: none;
   font-weight: 300;
   z-index: 1000;
   @media screen and (max-width: 600px) {
      font-size: 0.9em;
   }
`;

export const ContentImgs = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
`;
export const ContainerMedia = styled.div`
   width: 100%;
   height: 100%;
   position: relative;

   & .imgBack {
      filter: brightness(0.4);
   }

   &:after {
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(250, 250, 250, 0);
      position: absolute;
      top: 0;
      left: 0;
   }
`;

const bounce = keyframes`
   0% {
      transform: translatey(0px);
   }
   50% {
      transform: translatey(-10px);
   }
   100% {
      transform: translatey(0px);
   }
`;

export const AnimateImgStyles = styled.img`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   opacity: 0;

   &.loaded {
      opacity: 1;
      transition: opacity 620ms linear;
   }
   &.animate {
      animation: ${bounce} 5s infinite linear;
   }
`;
