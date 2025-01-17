import { useEffect } from "react";
import { Button } from "../components/Button";
import designExample1Iamge from "../assets/images/design-example-1.png";
import designExample2Iamge from "../assets/images/design-example-2.png";
import { Pointer } from "../components/Pointer";
import { motion, useAnimate } from "motion/react";
import cursoYouImage from "../assets/images/cursor-you.svg";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    // Start design animation
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, []);
  return (
    <section
      className="py-24 overflow-x-clip"
      // style={{
      //   cursor: `url(${cursoYouImage}), auto`,
      // }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{
            opacity: 0,
            y: 100,
            x: -100,
          }}
          drag
          dragConstraints={{
            top: -200,
            left: 0,
            bottom: 200,
            right: 350,
          }}
          className="absolute -left-32 top-10 hidden lg:block cursor-grabbing"
        >
          <img
            src={designExample1Iamge}
            alt="design Example1 Iamge"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{
            opacity: 0,
            y: 100,
            x: -200,
          }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="andrea" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          className="absolute -right-64 -top-16 hidden lg:block cursor-grabbing "
          initial={{
            opacity: 0,
            x: 100,
            y: 100,
          }}
          drag
          dragConstraints={{
            top: -100,
            left: -400,
            bottom: 200,
            right: 0,
          }}
        >
          <img
            src={designExample2Iamge}
            alt="design Example2 Iamge"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{
            opacity: 0,
            x: 275,
            y: 100,
          }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="brian" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div
            className="capitalize inline-flex py-1 px-3 
        bg-gradient-to-r from bg-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold"
          >
            🌟 $7.5m seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium lg:max-w-4xl mx-auto text-center mt-6">
          ImpactFul design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto ">
          Build fast, no code required, and create impactful designs with ease
          and efficiency, all in one place.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 w-full max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 outline-none min-w-[220px] md:flex-1"
          />
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
