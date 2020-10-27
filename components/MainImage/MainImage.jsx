import React, { useRef, useEffect, } from "react";
import PropTypes from "prop-types";

const MainImage = ({ image, caption }) => {
  const ImgRef = useRef();
  return (
    <div>
      <figure
        ref={ImgRef}
      >
        <img src={image} alt="img" />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

MainImage.propTypes = {
  image: PropTypes.object,
  caption: PropTypes.string,
};

export default MainImage;
