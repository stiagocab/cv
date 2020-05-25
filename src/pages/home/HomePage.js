import React, {useRef} from "react";
import CoverComponent from "../../components/cover/CoverComponent";
import DownToComponent from "../../components/downTo/DownToComponent";
import SkillsList from "./components/SkillsList";

export default function HomePage() {
   let skillRef = useRef(null);

   return (
      <>
         <CoverComponent />
         <DownToComponent
            action={() => {
               window.scrollTo({top: skillRef.current.offsetTop, left: 0, behavior: "smooth"});
            }}
         />
         <SkillsList ref={skillRef} />
      </>
   );
}
