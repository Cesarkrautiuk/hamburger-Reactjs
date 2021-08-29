import { useEffect, useState } from "react";
type ListerReturn = {
  herderBorber: boolean;
  scroll: boolean;
};
export function ListerScroll(): ListerReturn {
  const [herderBorber, setHerderBorber] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const scrolListerner = () => {
      window.scrollY > 10 ? setHerderBorber(true) : setHerderBorber(false);
      window.scrollY > 10 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", scrolListerner);
    return () => {
      window.removeEventListener("scroll", scrolListerner);
    };
  }, []);
  return { herderBorber, scroll };
}
