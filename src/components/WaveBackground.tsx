'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function hash(n: number) {
  const x = Math.sin(n) * 43758.5453123;
  return x - Math.floor(x);
}

function ParticleField({ count = 1600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r1 = hash(i * 12.9898);
      const r2 = hash(i * 78.233);
      const r3 = hash(i * 39.425);

      const theta = r1 * Math.PI * 2;
      const phi = Math.acos(2 * r2 - 1);
      const radius = 10 + r3 * 16;

      pos[i3] = Math.cos(theta) * Math.sin(phi) * radius;
      pos[i3 + 1] = Math.cos(phi) * radius * 0.6;
      pos[i3 + 2] = Math.sin(theta) * Math.sin(phi) * radius;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.015;
    ref.current.rotation.x = t * 0.006;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#fe4c23"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.18}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const px = state.pointer.x;
    const py = state.pointer.y;

    group.current.rotation.y = t * 0.05 + px * 0.22;
    group.current.rotation.x = -0.25 + py * 0.12;
    group.current.position.y = Math.sin(t * 0.6) * 0.25;
  });

  return (
    <group ref={group} position={[0, 0, -8]}>
      <mesh rotation={[0.2, 0.6, 0]}>
        <icosahedronGeometry args={[5.2, 2]} />
        <meshBasicMaterial color="#fe4c23" wireframe transparent opacity={0.12} />
      </mesh>

      <mesh rotation={[-0.1, 0.15, 0.35]}>
        <torusKnotGeometry args={[3.2, 0.65, 220, 18]} />
        <meshBasicMaterial color="#3d3d3d" wireframe transparent opacity={0.05} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8.5, 0.12, 12, 240]} />
        <meshBasicMaterial color="#fe4c23" wireframe transparent opacity={0.06} />
      </mesh>

      <ParticleField />
    </group>
  );
}

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 26], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#ffffff', 14, 60]} />
        <ambientLight intensity={0.85} />
        <directionalLight position={[8, 10, 6]} intensity={0.35} />
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/55 to-white" />
    </div>
  );
}
