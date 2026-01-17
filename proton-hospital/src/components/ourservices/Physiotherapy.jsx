import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/physiotherapy.jpg";

export default function Physiotherapy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Physiotherapy" tagline="Restoring movement and improving quality of life." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Rehabilitation and physical therapy services."
        treat={[
          "Post-surgery rehabilitation",
          "Sports injuries",
          "Joint stiffness",
          "Chronic pain management",
        ]}
      />
    </>
  );
}
