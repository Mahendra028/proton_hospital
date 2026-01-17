import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/general-surgery.jpg";

export default function GeneralSurgery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="General Surgery" tagline="Safe and advanced surgical solutions." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Surgical treatment for a wide range of conditions."
        treat={[
          "Appendicitis",
          "Hernia",
          "Gallbladder disease",
          "Minor & major surgeries",
        ]}
      />
    </>
  );
}
