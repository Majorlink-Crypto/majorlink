import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../Context/LenisContext";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    // Always force window to reset scroll to top immediately on path change
    if (!hash) {
      window.scrollTo(0, 0);
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    } else {
      // If there is an anchor hash (e.g. #faq), scroll to the target element
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          if (lenisRef?.current) {
            lenisRef.current.scrollTo(element, { duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 80);
    }
  }, [pathname, hash, lenisRef]);

  return null;
};

export default ScrollToTop;
