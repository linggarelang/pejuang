import { useEffect, useState } from "react";
import { animate, useMotionValue, motion } from "framer-motion";

export const AnimatedNumber = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(motionValue, target, {
        duration: duration / 1000,
        ease: "easeOut",
        onUpdate: (latest) => {
          const floored = Math.floor(latest);
          setCount(floored);
          if (floored >= target) setDone(true);
        },
      });

      return () => controls.stop();
    }, 0);

    return () => clearTimeout(timeout);
  }, [target, duration, motionValue]);

  if (target <= 0 || count === null) return null;
  return (
    <span className="inline-flex items-baseline">
      {count}
      {done && (
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="ml-1 inline-block"
        >
          +
        </motion.span>
      )}
    </span>
  );
};