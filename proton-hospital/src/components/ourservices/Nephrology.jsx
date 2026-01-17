import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Nephrology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Nephrology" tagline="Specialized kidney care with long-term support." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Comprehensive diagnosis and management of kidney-related disorders."
        treat={[
          "Chronic kidney disease",
          "Kidney failure",
          "Electrolyte imbalance",
          "Hypertension-related kidney issues",
        ]}
      />
    </>
  );
}
