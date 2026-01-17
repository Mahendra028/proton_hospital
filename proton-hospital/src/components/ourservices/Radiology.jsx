import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/radiology.jpg";

export default function Radiology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Radiology" tagline="Advanced imaging for accurate diagnosis." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="High-quality imaging services for diagnosis and planning."
        treat={[
          "X-rays",
          "CT scans",
          "MRI scans",
          "Ultrasound",
        ]}
      />
    </>
  );
}

