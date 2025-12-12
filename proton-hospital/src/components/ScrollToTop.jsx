// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({ top: 0, behavior });
  }, [pathname, behavior]);

  return null;
}
