import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/icu.jpg";

export default function ICU() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="ICU (Critical Care)" tagline="24/7 intensive monitoring and life support." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Critical care services for severely ill patients."
        treat={[
          "Sepsis",
          "Respiratory failure",
          "Multi-organ failure",
          "Post-operative critical care",
        ]}
      />
    </>
  );
}
