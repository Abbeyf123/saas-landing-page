import {  useScroll, useTransform } from "motion/react";
import { Tag } from "../components/Tag";
import { text } from "../Constants/Constants";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const Introduction = () => {
  const words = text.split(" ");
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);

  const wordIndexNumber = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length]
  );

  useEffect(() => {
    wordIndexNumber.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndexNumber]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="capitalize text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 leading-[3rem]">
            <span>your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, wordindex) => (
                <span
                  key={wordindex}
                  className={twMerge(
                    "text-white/15 transition duration-500",
                    wordindex < currentWord && "text-white"
                  )}
                >
                  {`${word} `}{" "}
                </span>
              ))}
            </span>
            <span className="text-lime-400 block">
              That's why we built Layers
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
};

export default Introduction;
