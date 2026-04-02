"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode, Component, ErrorInfo } from "react";

// Error boundary to catch WebGL/Three.js crashes gracefully
class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("WebGL/Three.js error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Silently fail - the 3D background is decorative, not essential
      return null;
    }
    return this.props.children;
  }
}

export default function Scene({ children }: { children: ReactNode }) {
  return (
    <WebGLErrorBoundary>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            // Handle WebGL context loss gracefully
            const canvas = gl.domElement;
            canvas.addEventListener("webglcontextlost", (e) => {
              e.preventDefault();
              console.warn("WebGL context lost");
            });
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {children}
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
