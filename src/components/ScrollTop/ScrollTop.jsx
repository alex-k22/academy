import { useState, useEffect } from "react";
import css from "../ScrollTop/ScrollTop.module.scss";

const ScrollTop = () => {
  const [buttonIsShown, setButtonIsShown] = useState(false);

  const handleVisibleButton = () => {
    setButtonIsShown(window.scrollY > 50);
    console.log(window.scrollY);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={`${css.scrollTop} ${buttonIsShown ? css.scrollTopActive : ""}`}
      onClick={handleScrollUp}
    >
      <svg
        fill="#ffffff"
        height="32px"
        width="32px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
        transform="rotate(90)"
      >
        <g id="SVGRepo_bgCarrier"></g>
        <g id="SVGRepo_tracerCarrier"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="XMLID_106_">
            {" "}
            <path
              id="XMLID_107_"
              d="M51.213,165.004L190.607,25.607c5.857-5.858,5.857-15.355-0.001-21.213 c-5.857-5.858-15.355-5.858-21.213,0.001l-150,150.004C16.58,157.211,15,161.026,15,165.004c0,3.979,1.581,7.794,4.394,10.607 l150,149.996C172.322,328.536,176.161,330,180,330s7.678-1.464,10.607-4.394c5.857-5.858,5.857-15.355-0.001-21.213L51.213,165.004 z"
            ></path>{" "}
            <path
              id="XMLID_108_"
              d="M171.213,165.004L310.607,25.607c5.858-5.858,5.858-15.355,0-21.213 c-5.857-5.858-15.355-5.858-21.213,0.001l-150,150.004c-2.813,2.813-4.393,6.628-4.393,10.606c0,3.979,1.581,7.794,4.394,10.607 l150,149.996C292.322,328.536,296.161,330,300,330c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213 L171.213,165.004z"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

export default ScrollTop;
