import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation"; // Use useRouter for navigation

const SceneIntro = () => {
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    const timeline = gsap.timeline();

    if (textRef1.current && textRef2.current && textRef3.current) {
      timeline
        .fromTo(
          textRef1.current,
          { x: "-100vw", opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power1.out" }
        )
        .to(textRef1.current, { opacity: 0, duration: 1, delay: 0.5 })
        .fromTo(
          textRef2.current,
          { opacity: 0, y: "80vh" },
          { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
        )
        .to(textRef2.current, { opacity: 0, duration: 1, delay: 0.5 })
        .fromTo(
          textRef3.current,
          { opacity: 0, y: "80vh" },
          { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
        )
        // Automatically navigate to the about page when the animation completes
        .call(() => {
          router.push("/about"); // Automatically navigate to the /about page
        });
    }
  }, [router]); // Ensure to include router as a dependency

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 ref={textRef1} className="text-8xl">
          hi
        </h1>

        <h1 ref={textRef2} className="text-6xl">
          how you doing?
        </h1>

        <h1 ref={textRef3} className="text-6xl">
          let me tell you about myself
        </h1>
      </div>
    </div>
  );
};

export default SceneIntro;
