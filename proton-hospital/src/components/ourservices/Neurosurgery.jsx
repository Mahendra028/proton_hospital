import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/neuro.jpg";

export default function Neurosurgery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Neurosurgery" tagline="Precision care for brain and spine." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Surgical treatment for brain, spine, and nervous system disorders."
        treat={[
          "Brain tumors",
          "Spinal injuries",
          "Stroke management",
          "Nerve compression",
        ]}
      />
    </>
  );
}
