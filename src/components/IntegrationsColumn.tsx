import { twMerge } from "tailwind-merge";
import { type IntegrationType } from "../Constants/Constants";
import { motion } from "motion/react";
import { Fragment } from "react/jsx-runtime";

export const IntegrationsColumn = (props: {
  integrations: IntegrationType[];
  className?: string;
  reverse?: boolean
}) => {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      className={twMerge("flex flex-col gap-4 pb-4 ", className)}
      initial={{
        y: reverse ? '-50%' : 0
      }}
      animate={{
        y: reverse ? 0: "-50%" ,
      }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-950 border-white/10 rounded-3xl p-6  "
            >
              <div className="flex justify-center ">
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};
