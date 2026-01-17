import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/interventional-radiology.jpg";

export default function InterventionalRadiology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Interventional Radiology" tagline="Minimally invasive image-guided treatments." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Image-guided diagnostic and therapeutic procedures."
        treat={[
          "Vascular blockages",
          "Tumor embolization",
          "Biopsies",
          "Drainage procedures",
        ]}
      />
    </>
  );
}
