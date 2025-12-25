import { motion } from "motion/react";

const FadeInWrapper = ({
  children,
  className,
  margin,
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: margin ?? "-100px" }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.8 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
