import { footerLinks } from "../Constants/Constants";
import logoImage from "../assets/images/logo.svg";
import { motion } from "framer-motion";

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-16"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center">
          <motion.div
            variants={variants}
            transition={{ delay: 0.2, duration: 0.5 }}
            className=""
          >
            <img src={logoImage} alt={"Layers logo"} />
          </motion.div>
          <motion.div
            variants={variants}
            transition={{ delay: 0.4, duration: 0.5 }}
            className=""
          >
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <motion.a
                  variants={variants}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  href={link.href}
                  className="text-white/50 text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
