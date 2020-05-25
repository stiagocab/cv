import styled from "@emotion/styled";

export const SkillsContainer = styled.section`
   width: 100%;
   padding: 2em;

   & p {
      font-size: 2em;
   }

   @media screen and (max-width: 600px) {
      padding: 2em 1em;

      & p {
         font-size: 1.6em;
      }
   }
`;
export const SkillsContainerList = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
`;
export const ItemSkill = styled.div`
   width: 20%;
   padding: 1em;
   margin-bottom: 2em;

   @media screen and (max-width: 1000px) {
      width: 33.333%;
      padding: 0.5em;
      margin-bottom: 1em;
   }
   @media screen and (max-width: 600px) {
      width: 50%;
   }
`;
