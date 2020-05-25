import React from "react";
import {CoverStyled, TitlePage, SubtitlePage, ContentImgs, ContainerMedia} from "../../styles/Cover";
import {ReactComponent as TriangleSVG} from "../../images/triangle.svg";
import AnimateImg from "./AnimateImg";

export default function CoverComponent() {
   return (
      <CoverStyled>
         <ContentImgs>
            <ContainerMedia>
               <AnimateImg
                  src="/images/codes/code_1920.jpg"
                  srcset="/images/codes/code_640.jpg 640w, /images/codes/code_1280.jpg 1280w"
                  sizes="(max-width: 600px) 640px, (max-width: 1300px) 1280px"
                  alt="pixabay.com"
                  top="0"
                  right="0"
                  height="100%"
                  width="100%"
                  className="imgBack animate"
               />
            </ContainerMedia>
         </ContentImgs>
         <TitlePage>Santiago Cabrera</TitlePage>
         <SubtitlePage>Web and Mobile Developer</SubtitlePage>
         <TriangleSVG className="triangle" />
      </CoverStyled>
   );
}

/* "code_1280.jpg 1280px, code_640.jpg 640w" */
