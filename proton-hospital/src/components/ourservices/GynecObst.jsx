import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img from "../../assets/departments/gynec.jpg";

export default function GynecObst() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <TopSection title="Gynecology & Obstetrics" tagline="Complete women’s healthcare at every stage of life." image={img} scale={scale} imageRef={ref} />
      <Content
        overview="Comprehensive care for pregnancy, childbirth, and women’s health."
        treat={[
          "Pregnancy & antenatal care",
          "Menstrual disorders",
          "Infertility",
          "High-risk pregnancies",
        ]}
      />
    </>
  );
}
