"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Grid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (gridRef.current) {
      let shouldMove = true;
      if (typeof window !== 'undefined') {
        shouldMove = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      if (shouldMove) {
        // Small scrolling effect on Z axis for the illusion of moving forward
        gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 1;
      }
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Main floor grid */}
      <gridHelper 
        ref={gridRef}
        args={[50, 50, "#00f3ff", "#bc13fe"]} 
        position={[0, 0, 0]}
      />
      {/* Dimmed plane to add depth underneath */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color="#050505" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}
