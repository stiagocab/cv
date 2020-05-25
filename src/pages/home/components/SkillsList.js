import React from "react";
import {SkillsContainer, SkillsContainerList, ItemSkill} from "../../../styles/SkilsStyles";

import {ReactComponent as NodeIcon} from "../../../images/node.svg";
import {ReactComponent as GitIcon} from "../../../images/git.svg";
import {ReactComponent as JsIcon} from "../../../images/js.svg";
import {ReactComponent as HtmlIcon} from "../../../images/html.svg";
import {ReactComponent as CssIcon} from "../../../images/css.svg";
import {ReactComponent as StylussIcon} from "../../../images/styluss.svg";
import {ReactComponent as ReactIcon} from "../../../images/react.svg";
import {ReactComponent as NativeIcon} from "../../../images/react_native.svg";

const SkillsList = React.forwardRef((props, ref) => {
   return (
      <SkillsContainer ref={ref}>
         <p>Skills</p>
         <SkillsContainerList>
            {React.Children.toArray(
               mySkilss.map((item) => {
                  let Icon = item.img;
                  return (
                     <ItemSkill>
                        <Icon width="100%" height="100%" />
                     </ItemSkill>
                  );
               }),
            )}
         </SkillsContainerList>
      </SkillsContainer>
   );
});
export default SkillsList;

const mySkilss = [
   {
      img: HtmlIcon,
   },
   {
      img: CssIcon,
   },
   {
      img: JsIcon,
   },
   {
      img: StylussIcon,
   },
   {
      img: ReactIcon,
   },
   {
      img: NativeIcon,
   },
   {
      img: NodeIcon,
   },
   {
      img: GitIcon,
   },
];
