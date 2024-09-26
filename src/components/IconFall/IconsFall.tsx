import React, { useEffect, useState } from "react";
import jsICON from "../../../public/Icons/java-script.png";
import tsICON from "../../../public/Icons/typescript.png";
import hcICON from "../../../public/Icons/programming-languages.png";
import vsICON from "../../../public/Icons/visual-basic.png";
import pyICON from "../../../public/Icons/python.png";
import { gsap } from "gsap";

const IconsFall: React.FC = () => {
  // Specify the type for iconElements
  const [iconElements, setIconElements] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    const icons = [
      { src: jsICON, alt: "JavaScript" },
      { src: tsICON, alt: "TypeScript" },
      { src: hcICON, alt: "Programming Languages" },
      { src: vsICON, alt: "Visual Basic" },
      { src: pyICON, alt: "Python" }
    ];

    const createFallingIcons = () => {
      const newIcons: HTMLDivElement[] = icons.map((icon) => {
        // Create a div for each icon
        const iconDiv = document.createElement("div");
        iconDiv.style.position = "absolute";
        iconDiv.style.top = "-50px"; // Start above the viewport
        iconDiv.style.left = `${Math.random() * 100}vw`; // Randomize horizontal position
        iconDiv.style.pointerEvents = "none"; // Prevent interaction

        // Use a smaller size for the icons
        iconDiv.innerHTML = `<img src="${icon.src.src}" alt="${icon.alt}" className="overflow-hidden" width="40" height="40" />`;
        document.body.appendChild(iconDiv); // Append to body

        return iconDiv;
      });

      // Set the created icon elements to state
      setIconElements(newIcons);
    };

    createFallingIcons();
  }, []); // No dependency on icons since it's now inside useEffect

  useEffect(() => {
    iconElements.forEach((iconDiv) => {
      // Animate each icon using GSAP
      gsap.to(iconDiv, {
        y: window.innerHeight, // Move to the bottom of the viewport
        rotation: 360, // Rotate fully
        opacity: 0, // Fade out
        duration: 3 + Math.random() * 2, // Random duration between 3 to 5 seconds
        onComplete: () => iconDiv.remove() // Remove from DOM after animation
      });
    });
  }, [iconElements]);

  return (
    <div className="flex flex-col items-center overflow-hidden ">
      {/* Optional: Add a background or any other content here */}
    </div>
  );
};

export default IconsFall;
