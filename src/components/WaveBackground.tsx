'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1400;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const fract = (x: number) => x - Math.floor(x);
    const hash = (n: number) => fract(Math.sin(n) * 43758.5453123);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r1 = hash(i * 127.1);
      const r2 = hash(i * 311.7);
      const r3 = hash(i * 74.7);

      pos[i3] = (r1 - 0.5) * 60;
      pos[i3 + 1] = (r2 - 0.5) * 30;
      pos[i3 + 2] = (r3 - 0.5) * 60;
    }

    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.03;
    ref.current.rotation.x = t * 0.01;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00c6ff"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.35}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WaveLines() {
    const linesCount = 40;
    const pointsPerLine = 100;
    
    const lines = useMemo(() => {
        const linesArr = [];
        for (let i = 0; i < linesCount; i++) {
            const points = [];
            for (let j = 0; j < pointsPerLine; j++) {
                points.push(new THREE.Vector3(j - pointsPerLine/2, 0, i - linesCount/2));
            }
            linesArr.push(new THREE.CatmullRomCurve3(points));
        }
        return linesArr;
    }, []);

    const LineGroup = ({ curve, index }: { curve: THREE.CatmullRomCurve3, index: number }) => {
        const ref = useRef<THREE.Line>(null!);
        const basePositions = useMemo(() => {
            const points = curve.getPoints(pointsPerLine - 1);
            const positions = new Float32Array(pointsPerLine * 3);
            for (let i = 0; i < pointsPerLine; i++) {
                const i3 = i * 3;
                const p = points[i];
                positions[i3] = p.x;
                positions[i3 + 1] = p.y;
                positions[i3 + 2] = p.z;
            }
            return positions;
        }, [curve]);
         
        useFrame((state) => {
            const t = state.clock.getElapsedTime();
            const positions = ref.current.geometry.attributes.position.array as Float32Array;
            
            for (let i = 0; i < pointsPerLine; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const z = positions[i3 + 2];
                
                // Animated wave logic
                const y =
                    Math.sin(x * 0.2 + t + index * 0.1) * 2.5 * Math.sin(t * 0.5) +
                    Math.cos(z * 0.25 + t) * 0.75;
                positions[i3 + 1] = y;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;
        });

        return (
            /* @ts-expect-error - conflict with SVG line element types */
            <line ref={ref}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[basePositions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                  color="#fe4c23"
                  transparent
                  opacity={0.22}
                  depthWrite={false}
                  linewidth={1}
                />
            </line>
        );
    };

    return (
        <group rotation={[Math.PI / 4, 0, 0]} position={[0, -8, -18]} scale={[1.25, 1, 1.25]}>
            {lines.map((_, i) => (
                <LineGroup key={i} curve={_} index={i} />
            ))}
        </group>
    );
}

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 10, 24], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={['#ffffff', 12, 70]} />
        <ambientLight intensity={0.65} />
        <directionalLight position={[10, 15, 6]} intensity={0.35} />
        <Particles />
        <WaveLines />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white" />
    </div>
  );
}
