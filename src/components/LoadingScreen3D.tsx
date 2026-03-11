import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GoldBlocks() {
  const groupRef = useRef<THREE.Group>(null);
  const blocksRef = useRef<THREE.InstancedMesh>(null);

  const count = 30;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const targets = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    // Build a simple hotel-like shape
    for (let y = 0; y < 5; y++) {
      for (let x = -2; x <= 2; x++) {
        if (y >= 3 && (x < -1 || x > 1)) continue;
        arr.push(new THREE.Vector3(x * 0.6, y * 0.6 - 1.2, 0));
      }
    }
    return arr.slice(0, count);
  }, []);

  const startPositions = useMemo(
    () => targets.map(() => new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8)),
    [targets]
  );

  useFrame(({ clock }) => {
    if (!blocksRef.current) return;
    const t = Math.min(clock.getElapsedTime() / 2.5, 1);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    for (let i = 0; i < targets.length; i++) {
      dummy.position.lerpVectors(startPositions[i], targets[i], eased);
      dummy.rotation.set(
        (1 - eased) * Math.PI * 2 * Math.random() * 0.01,
        (1 - eased) * Math.PI * 2 * Math.random() * 0.01,
        0
      );
      dummy.scale.setScalar(0.3 + eased * 0.7);
      dummy.updateMatrix();
      blocksRef.current.setMatrixAt(i, dummy.matrix);
    }
    blocksRef.current.instanceMatrix.needsUpdate = true;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={blocksRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#C9A84C" metalness={0.8} roughness={0.2} />
      </instancedMesh>
    </group>
  );
}

interface LoadingScreen3DProps {
  progress: number;
}

const LoadingScreen3D = ({ progress }: LoadingScreen3DProps) => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
      <div className="w-64 h-64">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#C9A84C" />
          <pointLight position={[-5, -5, 3]} intensity={0.5} color="#C9A84C" />
          <GoldBlocks />
        </Canvas>
      </div>
      <div className="mt-8 w-48">
        <div className="h-0.5 bg-muted/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-primary/60 text-center mt-3 tracking-widest uppercase font-light">
          HOTELE
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen3D;
