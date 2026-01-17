import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/pediatrics.jpg";

export default function Pediatrics() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Pediatrics" tagline="Specialized healthcare for children." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Medical care for infants, children, and adolescents."
        treat={[
          "Childhood infections",
          "Vaccinations",
          "Growth disorders",
          "Pediatric emergencies",
        ]}
      />
    </>
  );
}
