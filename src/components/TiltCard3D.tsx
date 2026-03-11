import { useRef, useCallback, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TiltCard3D = ({ children, className = "", onClick }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`,
      boxShadow: `0 20px 60px hsl(43 52% 54% / 0.2), 0 0 30px hsl(43 52% 54% / 0.1)`,
      backgroundImage: `radial-gradient(circle at ${sheenX}% ${sheenY}%, hsl(43 52% 54% / 0.08) 0%, transparent 60%)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
      boxShadow: "0 0 0 0 transparent",
      backgroundImage: "none",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-[box-shadow] duration-300 ${className}`}
      style={{
        ...style,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TiltCard3D;
