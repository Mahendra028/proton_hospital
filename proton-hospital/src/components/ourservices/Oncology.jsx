import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/oncology.jpg";

export default function Oncology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Oncology" tagline="Advanced cancer care with compassion and precision." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Comprehensive cancer diagnosis, treatment, and long-term care."
        treat={[
          "Breast cancer",
          "Lung cancer",
          "Blood cancers",
          "Solid tumors",
        ]}
      />
    </>
  );
}
