import React, {useState} from "react";
import {AnimateImgStyles} from "../../styles/Cover";

const AnimateImg = (props) => {
   const {alt, src, top, right, width, height, time, srcset, sizes, className} = props;
   const [isLoad, setLoad] = useState(false);
   return (
      <AnimateImgStyles
         top={top}
         right={right}
         height={height}
         width={width}
         src={src}
         alt={alt}
         time={time}
         srcSet={srcset}
         sizes={sizes}
         onLoad={() => {
            setLoad(true);
         }}
         className={`${isLoad ? "loaded" : ""} ${className}`}
      />
   );
};
export default AnimateImg;
AnimateImg.defaultProps = {
   top: "10px",
   right: "10px",
   height: "200px",
   width: "auto",
   time: "5s",
   sizes: "",
   className: "",
};
