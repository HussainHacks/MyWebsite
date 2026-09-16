"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      let shouldRotate = true;
      if (typeof window !== 'undefined') {
        shouldRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      if (shouldRotate) {
        meshRef.current.rotation.y += delta * 0.1;
        meshRef.current.rotation.x += delta * 0.05;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a0f"
          emissive="#00f3ff"
          emissiveIntensity={0.2}
          wireframe={true}
        />
      </mesh>
      {/* Outer glow aura */}
      <mesh>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshBasicMaterial
          color="#00f3ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
