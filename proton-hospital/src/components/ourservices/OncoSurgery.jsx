import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/onco-surgery.jpg";

export default function OncoSurgery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Onco Surgery" tagline="Precision surgical cancer care." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Surgical management of cancer using advanced techniques."
        treat={[
          "Tumor removal",
          "Cancer staging surgeries",
          "Reconstructive surgery",
          "Minimally invasive procedures",
        ]}
      />
    </>
  );
}
