import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation"; // Use useRouter for navigation

const SceneIntro = () => {
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const textRef4 = useRef<HTMLHeadingElement>(null);
  const textRef5 = useRef<HTMLHeadingElement>(null);
  const textRef6 = useRef<HTMLHeadingElement>(null);
  const textRef7 = useRef<HTMLHeadingElement>(null); // Added textRef7 for Wordpress

  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {




    const timeline = gsap.timeline({ repeat: 0, repeatDelay: 0.5 }); // No repeat, only run once

    // Sequential animation for the intro and each skill
    if (
      textRef1.current &&
      textRef2.current &&
      textRef3.current &&
      textRef4.current &&
      textRef5.current &&
      textRef6.current &&
      textRef7.current
    ) {
      // Intro text animation
      timeline
        .fromTo(
          textRef1.current,
          { x: "-100vw", opacity: 0 },
          { x: 0, opacity: 1, duration: 1.3, ease: "power1.out" }
        )
        .to(textRef1.current, { opacity: 0, duration: 0.3, delay: 0.3 })
        .fromTo(
          textRef2.current,
          { opacity: 0, y: "-100vh" }, // Start from above
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" } // Move to the middle
        )
        .to(textRef2.current, { opacity: 0, duration: 0.3, delay: 0.3 });

      // Skill animation: manually fade in and out each skill
      const skills = [
        textRef3.current,
        textRef4.current,
        textRef5.current,
        textRef6.current,
        textRef7.current
      ];

      skills.forEach((skill) => {
        timeline
          .fromTo(
            skill,
            { autoAlpha: 0 }, // Start with the skill hidden
            { autoAlpha: 1, duration: 0.5, ease: "power1.out" } // Fade in
          )
          .to(skill, { autoAlpha: 0, duration: 0.5, delay: 0.5 }); // Fade out
      });

      // Navigate to the /about page after all animations
      timeline.call(() => {
        router.push("/about");
      });
    }
  }, [router]);

  return (
    <div className=" text-white flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 ref={textRef1} className="text-8xl">
          hi
        </h1>

        <h1 ref={textRef2} className="text-6xl absolute">
          I do
        </h1>

        {/* Skills section */}
        <h1 ref={textRef3} className="text-6xl absolute">
          Freelance.
        </h1>
        <h1 ref={textRef4} className="text-6xl absolute">
          Frontend.
        </h1>
        <h1 ref={textRef5} className="text-6xl absolute">
          Backend.
        </h1>
        <h1 ref={textRef6} className="text-6xl absolute">
          UI / UX.
        </h1>
        <h1 ref={textRef7} className="text-6xl absolute">
          Wordpress.
        </h1>
      </div>
    </div>
  );
};

export default SceneIntro;
