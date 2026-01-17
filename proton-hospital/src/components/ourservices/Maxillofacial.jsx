import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/maxillofacial.jpg";

export default function Maxillofacial() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Maxillofacial" tagline="Expert care for face and jaw conditions." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Surgical treatment for facial, jaw, and oral conditions."
        treat={[
          "Facial trauma",
          "Jaw deformities",
          "Oral tumors",
          "Dental infections",
        ]}
      />
    </>
  );
}
