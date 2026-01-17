import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/pathology.jpg";

export default function Pathology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Pathology" tagline="Accurate diagnostics for better treatment." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Laboratory diagnostics supporting clinical decisions."
        treat={[
          "Blood tests",
          "Biopsy analysis",
          "Cancer diagnostics",
          "Infection screening",
        ]}
      />
    </>
  );
}
