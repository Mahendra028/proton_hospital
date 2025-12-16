import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const introSeen = localStorage.getItem("introSeen");

    // If already seen → skip intro
    if (introSeen) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const finishIntro = () => {
    localStorage.setItem("introSeen", "true");
    navigate("/", { replace: true });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <video
        src="/video/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finishIntro}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
