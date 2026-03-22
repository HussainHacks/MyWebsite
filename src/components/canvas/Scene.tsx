"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

export default function Scene({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {children}
      </Canvas>
    </div>
  );
}
