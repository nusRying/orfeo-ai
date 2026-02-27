'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function hash(n: number) {
  const x = Math.sin(n) * 43758.5453123;
  return x - Math.floor(x);
}

function ParticleField({ count = 1800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const base = useMemo(() => {
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

  const positions = useMemo(() => base.slice(), [base]);

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    const primary = new THREE.Color('#fe4c23');
    const neutral = new THREE.Color('#3d3d3d');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const mix = hash(i * 91.7);
      const color = primary.clone().lerp(neutral, mix * 0.35);
      c[i3] = color.r;
      c[i3 + 1] = color.g;
      c[i3 + 2] = color.b;
    }

    return c;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = base[i3];
      const by = base[i3 + 1];
      const bz = base[i3 + 2];
      arr[i3] = bx + Math.sin(t * 0.55 + bz * 0.18) * 0.05;
      arr[i3 + 1] = by + Math.cos(t * 0.65 + bx * 0.14) * 0.12;
      arr[i3 + 2] = bz + Math.sin(t * 0.5 + bx * 0.12) * 0.05;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;

    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = t * 0.008;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        depthTest={false}
      />
    </points>
  );
}

function WireEdges({
  geometry,
  color,
  opacity,
}: {
  geometry: THREE.BufferGeometry;
  color: string;
  opacity: number;
}) {
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 12), [geometry]);
  return (
    <lineSegments geometry={edges}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        depthTest={false}
      />
    </lineSegments>
  );
}

function OrbitRing({
  radius,
  tube,
  color,
  opacity,
  rotation,
}: {
  radius: number;
  tube: number;
  color: string;
  opacity: number;
  rotation: [number, number, number];
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, tube, 10, 240]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

function Scene({
  pointerRef,
  scrollY,
}: {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  scrollY: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null!);
  const rings = useRef<THREE.Group>(null!);
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const { viewport } = useThree();

  const outerGeo = useMemo(() => new THREE.IcosahedronGeometry(5.8, 2), []);
  const innerGeo = useMemo(() => new THREE.OctahedronGeometry(4.25, 1), []);
  const coreGeo = useMemo(() => new THREE.SphereGeometry(3.75, 48, 48), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointer.current.x = THREE.MathUtils.lerp(pointer.current.x, pointerRef.current.x, 0.06);
    pointer.current.y = THREE.MathUtils.lerp(pointer.current.y, pointerRef.current.y, 0.06);
    
    // Smooth scroll interpolation
    scroll.current = THREE.MathUtils.lerp(scroll.current, scrollY.current, 0.05);

    const px = pointer.current.x;
    const py = pointer.current.y;

    const baseX = Math.min(viewport.width * 0.18, 4.2);
    const baseY = Math.min(viewport.height * 0.05, 1.1) + scroll.current * 0.5; // Parallax up on scroll
    const baseScale = Math.min(1.12, Math.max(0.88, viewport.width / 9.5));

    group.current.position.x = baseX + px * 1.2;
    group.current.position.y = baseY + Math.sin(t * 0.6) * 0.28 + py * 0.65;
    group.current.rotation.y = t * 0.1 + px * 0.25 - scroll.current * 0.1; // Rotate counter on scroll
    group.current.rotation.x = -0.22 + py * 0.16 + scroll.current * 0.05;
    group.current.rotation.z = Math.sin(t * 0.25) * 0.06;

    const s = baseScale + Math.sin(t * 0.35) * 0.02 - scroll.current * 0.03; // Shrink slightly on scroll
    group.current.scale.setScalar(s);

    outer.current.rotation.y = t * 0.06;
    outer.current.rotation.x = t * 0.03;
    inner.current.rotation.y = -t * 0.08;
    inner.current.rotation.x = t * 0.05;
    rings.current.rotation.y = -t * 0.14;
    rings.current.rotation.x = -t * 0.04;
  });

  return (
    <group ref={group} position={[0, 0, -10]}>
      <group ref={outer}>
        <WireEdges geometry={outerGeo} color="#3d3d3d" opacity={0.12} />
        <WireEdges geometry={outerGeo} color="#fe4c23" opacity={0.58} />
        <WireEdges geometry={outerGeo} color="#fe4c23" opacity={0.22} />
      </group>

      <mesh geometry={coreGeo} rotation={[0.15, 0.25, 0]}>
        <meshStandardMaterial
          color="#fe4c23"
          transparent
          opacity={0.12}
          roughness={0.25}
          metalness={0}
          emissive="#fe4c23"
          emissiveIntensity={1.05}
          depthWrite={false}
        />
      </mesh>

      <group ref={inner} rotation={[0.35, 0.2, 0.15]}>
        <WireEdges geometry={innerGeo} color="#3d3d3d" opacity={0.2} />
        <WireEdges geometry={innerGeo} color="#fe4c23" opacity={0.18} />
      </group>

      <group ref={rings}>
        <OrbitRing radius={9.4} tube={0.078} color="#fe4c23" opacity={0.18} rotation={[Math.PI / 2, 0, 0]} />
        <OrbitRing radius={11.2} tube={0.062} color="#3d3d3d" opacity={0.12} rotation={[Math.PI / 2.6, 0.4, 0.2]} />
        <OrbitRing radius={7.8} tube={0.062} color="#fe4c23" opacity={0.14} rotation={[Math.PI / 2.1, -0.2, 0.8]} />
      </group>

      <ParticleField />
    </group>
  );
}

export default function WaveBackground() {
  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      const x = (e.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
      const y = -((e.clientY / Math.max(1, window.innerHeight)) * 2 - 1);
      pointerRef.current.x = THREE.MathUtils.clamp(x, -1, 1);
      pointerRef.current.y = THREE.MathUtils.clamp(y, -1, 1);
    }
    
    function onScroll() {
        // Normalize scroll between 0 (top) and ~10 (scrolled down)
        // Adjust the divisor to control how fast the parallax moves
        scrollY.current = Math.min(window.scrollY / 250, 10);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Init scroll
    onScroll();
    
    return () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 26], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ filter: 'contrast(1.08) saturate(1.16)' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#ffffff', 55, 160]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 12, 7]} intensity={0.35} />
        <Scene pointerRef={pointerRef} scrollY={scrollY} />
      </Canvas>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 35%, rgba(254,76,35,0.12), transparent 58%), radial-gradient(circle at 66% 42%, rgba(61,61,61,0.06), transparent 62%)',
        }}
      />
    </div>
  );
}
