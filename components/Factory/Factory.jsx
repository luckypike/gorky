import React, { useEffect, useState, useRef } from "react";
import ScrollBooster from "scrollbooster";
import PropTypes from "prop-types";

import styles from "./Factory.module.css";

const Factory = ({ children }) => {
  const [scroller, setScroller] = useState(false);
  const xRef = useRef(0);

  const rootRef = useRef();
  const contentRef = useRef();
  const SBRef = useRef();

  const updateDimensions = () => {
    setScroller(
      window
        .getComputedStyle(contentRef.current)
        .getPropertyValue("display") === "flex"
    );
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (scroller && !SBRef.current) {
      SBRef.current = new ScrollBooster({
        viewport: rootRef.current,
        content: contentRef.current,
        direction: "horizontal",
        preventDefaultOnEmulateScroll: "horizontal",
        dragDirectionTolerance: 0,
        emulateScroll: true,
        scrollMode: "native",
        onUpdate: (state) => {
          xRef.current = state.position.x;
        },
        onWheel: (state, event) => {
          let offsetX = 0;
          if (event.deltaY >= 0 && event.deltaX >= 0)
            offsetX = Math.max(event.deltaY, event.deltaX);
          if (event.deltaY <= 0 && event.deltaX <= 0)
            offsetX = Math.min(event.deltaY, event.deltaX);
          SBRef.current.scrollOffset.x = -offsetX / 1.5;
          SBRef.current.scrollOffset.y = -event.deltaY / 1.5;
        },
      });
    }

    if (!scroller && SBRef.current) {
      SBRef.current.destroy();
      SBRef.current = null;
    }

    return () => {
      if (SBRef.current) {
        SBRef.current.destroy();
        SBRef.current = null;
      }
    };
  }, [scroller]);

  return (
    <div ref={rootRef} className={styles.root}>
      <div ref={contentRef} className={styles.factory}>
        {children}
      </div>
    </div>
  );
};

Factory.propTypes = {
  children: PropTypes.node,
};

export default Factory;
