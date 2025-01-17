import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";

const CallToAction = () => {
  const animation = useRef<AnimationPlaybackControls>();
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, repeat: Infinity, ease: "linear" }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.2;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);
  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          className="flex group flex-none gap-16 text-6xl pr-16 md:text-7xl font-medium"
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-14">
                  <span className="text-lime-400 text-7xl">&#10038;</span>
                  <span className="group-hover:text-lime-400 transition duration-150 cursor-pointer">
                    Try it for free
                  </span>
                </div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
