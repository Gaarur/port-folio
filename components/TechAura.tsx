"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial, Ring } from "@react-three/drei";
import * as THREE from "three";

function GeometricRings() {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring1Ref.current) ring1Ref.current.rotation.z = time * 0.1;
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.15;
      ring2Ref.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }
    if (ring3Ref.current) ring3Ref.current.rotation.z = time * 0.05;
  });

  return (
    <group>
      {/* Primary Inner Ring (Dashed) */}
      <group ref={ring1Ref}>
        <Ring args={[1.6, 1.62, 64]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshBasicMaterial color="#10b981" transparent opacity={0.3} wireframe />
        </Ring>
        {/* Dash Markers */}
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[
            Math.cos((i / 12) * Math.PI * 2) * 1.61,
            Math.sin((i / 12) * Math.PI * 2) * 1.61,
            0
          ]}>
            <boxGeometry args={[0.05, 0.2, 0.01]} />
            <meshBasicMaterial color="#10b981" transparent opacity={0.5} />
          </mesh>
        ))}
      </group>

      {/* Middle Orbit Ring */}
      <group ref={ring2Ref}>
        <Ring args={[2.2, 2.21, 128]} rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
        </Ring>
      </group>

      {/* Large Outer Perimeter */}
      <group ref={ring3Ref}>
        <Ring args={[3, 3.01, 128]} rotation={[-Math.PI / 6, 0, 0]}>
          <meshBasicMaterial color="#10b981" transparent opacity={0.1} />
        </Ring>
      </group>
    </group>
  );
}

function PlexusField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, colorArr } = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    const colorArr = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
        const r = 1.5 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        
        colorArr[i * 3] = 0.06; // R
        colorArr[i * 3 + 1] = 0.72; // G
        colorArr[i * 3 + 2] = 0.50; // B
    }
    return { positions, colorArr };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colorArr}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

export default function TechAura() {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#10b981" />
        
        <GeometricRings />
        <PlexusField />
        
        <fog attach="fog" args={["#030712", 5, 12]} />
      </Canvas>
    </div>
  );
}
