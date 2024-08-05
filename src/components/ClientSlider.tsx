import React, { FC, useEffect, useRef, useState } from "react";

type ImageItem ={
  name: string;
  url: string;
}

interface Props {
  images: ImageItem[];
}

const ClientSlider: FC<Props> = ({images}) => {  
  const clientSliderRef = useRef<HTMLUListElement>(null);
  const [rotating, setRotating] = useState(true);
  const clientspeed = 600;

  useEffect(() => {
    const clientSlider = clientSliderRef.current;
    if (!clientSlider) return;

    const clients = clientSlider.children.length;
    const clientWidth = clients * 220;
    clientSlider.style.width = `${clientWidth}px`;

    const intervalId = setInterval(() => {
      if (rotating) {
        rotateClients();
      }
    }, clientspeed);

    return () => clearInterval(intervalId);
  }, [rotating]);

  const rotateClients = () => {
    const clientSlider = clientSliderRef.current;
    if (!clientSlider) return;

    const firstChild = clientSlider.querySelector(
      "li:first-child"
    ) as HTMLElement;
    if (firstChild) {
      firstChild.style.transition = "margin-left 1s ease-in-out";
      firstChild.style.marginLeft = "-220px";
      firstChild.addEventListener(
        "transitionend",
        () => {
          clientSlider.appendChild(firstChild);
          firstChild.style.transition = "";
          firstChild.style.marginLeft = "0px";
        },
        { once: true }
      );
    }
  };

  const handleMouseEnter = () => setRotating(false);
  const handleMouseLeave = () => setRotating(true);
  return (
    <>
      <div
        id="ourclients"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="clients-wrap">
          <ul id="clientlogo" className="clearfix" ref={clientSliderRef}>
            {images && images.map((item)=>
              (
                <li key={item.name}>
                  <img src={item?.url} alt="Logo" />
                </li>
              )
            )}            
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClientSlider;
