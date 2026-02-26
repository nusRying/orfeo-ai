'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WaveParticles() {
  const ref = useRef<THREE.Points>(null!);
  
  // Create a grid of points
  const count = 10000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        const z = (Math.random() - 0.5) * 40;
        pos.set([x, y, z], i * 3);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Animate the points in a wave-like motion
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positionsArray[i3];
      const z = positionsArray[i3 + 2];
      
      // Sine wave calculation
      positionsArray[i3 + 1] = Math.sin(x * 0.3 + t) * 2 + Math.cos(z * 0.2 + t) * 2;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Subtle rotation
    ref.current.rotation.y = t * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00c6ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
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
        
        useFrame((state) => {
            const t = state.clock.getElapsedTime();
            const positions = ref.current.geometry.attributes.position.array as Float32Array;
            
            for (let i = 0; i < pointsPerLine; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const z = positions[i3 + 2];
                
                // Animated wave logic
                const y = Math.sin(x * 0.2 + t + index * 0.1) * 2.5 * Math.sin(t * 0.5);
                positions[i3 + 1] = y;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;
        });

        return (
            <line ref={ref}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={pointsPerLine}
                        array={new Float32Array(pointsPerLine * 3)}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#ffffff" transparent opacity={0.15} linewidth={1} />
            </line>
        );
    };

    return (
        <group rotation={[Math.PI / 4, 0, 0]}>
            {lines.map((_, i) => (
                <LineGroup key={i} curve={_} index={i} />
            ))}
        </group>
    );
}

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#081426]">
      <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
        <fog attach="fog" args={['#081426', 10, 50]} />
        <ambientLight intensity={0.5} />
        <WaveLines />
        {/* <WaveParticles /> */}
      </Canvas>
    </div>
  );
}
