import { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="" style={{ backgroundColor: "#0B0B0B" }}>
      <div className="relative w-full h-screen overflow-hidden">
        <iframe
          src='https://my.spline.design/unovacoin-JiAOG3yq15Q3rMCzjXb2iglZ/'
          frameBorder='0'
          width='130%'
          height='130%'
          className="absolute inset-0"
          style={{ transform: "translate(-140px, -100px) scale(1.08)", transformOrigin: "center" }}
        ></iframe>
      </div>
    </section>
  );
}
