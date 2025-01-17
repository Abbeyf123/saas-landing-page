import { useState } from "react";
import { navLinks } from "../Constants/Constants";
import logoImage from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="py-4 lg:py-8 fixed  w-full z-40 top-0">
      <div className="container max-w-5xl ">
        <div className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur bg-neutral-950/60">
          <div className="grid  grid-cols-2 lg:grid-cols-3 rounded-full p-2 px-4 md:pr-2 items-center">
            <div className="">
              <img
                src={logoImage}
                alt="Layers Logo"
                className="h-9 w-auto md:h-auto"
              />
            </div>
            <div className="justify-center items-center hidden lg:flex ">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-menu md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={`origin-left transition ${
                    isMenuOpen && "rotate-45 -translate-y-1"
                  }`}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={`transition ${isMenuOpen && "opacity-0"}`}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={`transition origin-left ${
                    isMenuOpen && "-rotate-45 translate-y-1"
                  }`}
                ></line>
              </svg>
              <Button
                variant="secondary"
                className="hidden md:inline-flex items-center"
              >
                Log In
              </Button>
              <Button
                variant="primary"
                className="hidden md:inline-flex items-center"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="overflow-hidden"
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                exit={{
                  height: 0,
                }}
              >
                <div className="flex flex-col items-center py-4 gap-4 ">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label} className="py-2">
                      {link.label}
                    </a>
                  ))}
                  <Button variant="secondary">Log In</Button>
                  <Button variant="primary">Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
