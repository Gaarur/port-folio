"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function NeuralBrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Animate the core distortion and rotation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group>
      {/* Core Pulsing Sphere - Acid Yellow / Orange */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#E8FF4D"
            speed={4}
            distort={0.4}
            radius={1}
            emissive="#E8FF4D"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>

      {/* Outer Particle Cloud (Neural Network) */}
      <Points ref={pointsRef}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              useMemo(() => {
                const positions = new Float32Array(500 * 3);
                for (let i = 0; i < 500; i++) {
                  const r = 2.5 + Math.random() * 1.5;
                  const theta = Math.random() * Math.PI * 2;
                  const phi = Math.random() * Math.PI;
                  positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                  positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                  positions[i * 3 + 2] = r * Math.cos(phi);
                }
                return positions;
              }, []),
              3,
            ]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[
              useMemo(() => {
                const colors = new Float32Array(500 * 3);
                for (let i = 0; i < 500; i++) {
                  // Mix of Acid Yellow and Orange
                  const isOrange = Math.random() > 0.7;
                  if (isOrange) {
                    colors[i * 3] = 1.0;     // R (FF)
                    colors[i * 3 + 1] = 0.36; // G (5C)
                    colors[i * 3 + 2] = 0.21; // B (35)
                  } else {
                    colors[i * 3] = 0.91;     // R (E8)
                    colors[i * 3 + 1] = 1.0;  // G (FF)
                    colors[i * 3 + 2] = 0.30; // B (4D)
                  }
                }
                return colors;
              }, []),
              3,
            ]}
          />
        </bufferGeometry>
      </Points>
    </group>
  );
}

export default function AICore() {
  return (
    <div className="w-full h-full relative group cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#E8FF4D" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FF5C35" />
        
        <NeuralBrain />
        
        {/* Visual Flair */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Subtle Background particles */}
        <fog attach="fog" args={["#0A0A0A", 5, 15]} />
      </Canvas>
      
      {/* HUD overlays - matching new theme */}
      <div className="absolute inset-0 border border-[#E8FF4D]/10 rounded-full scale-110 animate-[pulse_4s_infinite] pointer-events-none" />
      <div className="absolute inset-0 border border-[#FF5C35]/10 rounded-full scale-125 animate-[pulse_6s_infinite] pointer-events-none" />
    </div>
  );
}
