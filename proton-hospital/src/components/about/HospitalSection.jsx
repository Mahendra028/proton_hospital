
import React from "react";

const ExactFourShapeImageCards = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .shapes-row {
            display: flex;
            justify-content: center;
            gap: 40px; /* 👈 LITTLE BIT MORE SPACE */
            align-items: flex-start;
            width: 100%;
            padding: 40px 20px;
            background: #ffffff;
          }

          .shape {
            width: 140px;
            height: 200px;
            overflow: hidden;
            border: 3px solid #000;
            background: #ddd;
            flex-shrink: 0;
          }

          .shape img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* 1️⃣ FULL CAPSULE */
          .shape-1 {
            border-radius: 100px;
          }

          /* 2️⃣ FLAT TOP, ROUND BOTTOM */
          .shape-2 {
            border-radius: 0 0 100px 100px;
            margin-top: 80px;
          }

          /* 3️⃣ ONLY BOTTOM-RIGHT CURVE */
          .shape-3 {
            border-radius: 0 0 80px 0;
          }

          /* 4️⃣ ROUND TOP, FLAT BOTTOM */
          .shape-4 {
            border-radius: 100px 100px 0 0;
            margin-top: 80px;
          }
        `,
        }}
      />

      <div className="shapes-row">
        <div className="shape shape-1">
          <img src="/images/shape1.jpg" alt="" />
        </div>

        <div className="shape shape-2">
          <img src="/images/shape2.jpg" alt="" />
        </div>

        <div className="shape shape-3">
          <img src="/images/shape3.jpg" alt="" />
        </div>

        <div className="shape shape-4">
          <img src="/images/shape4.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ExactFourShapeImageCards;
