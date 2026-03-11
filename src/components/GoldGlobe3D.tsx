import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial
        color="#C9A84C"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

interface GoldGlobe3DProps {
  className?: string;
}

const GoldGlobe3D = ({ className }: GoldGlobe3DProps) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#C9A84C" />
        <Globe />
      </Canvas>
    </div>
  );
};

export default GoldGlobe3D;
