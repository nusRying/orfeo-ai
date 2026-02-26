'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useDictionary } from '@/i18n/DictionaryProvider';
import { Bot, LineChart, Brain } from "lucide-react";
import CompanyMarquee from './CompanyMarquee';

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
                const y = Math.sin(x * 0.2 + t + index * 0.1) * 2.5 * Math.sin(t * 0.5);
                positions[i3 + 1] = y;
            }
            ref.current.geometry.attributes.position.needsUpdate = true;
        });
        return (
            /* @ts-ignore */
            <line ref={ref}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={pointsPerLine} array={new Float32Array(pointsPerLine * 3)} itemSize={3} args={[new Float32Array(pointsPerLine * 3), 3]} />
                </bufferGeometry>
                <lineBasicMaterial color="#fe4c23" transparent opacity={0.4} linewidth={1} />
            </line>
        );
    };

    return (
        <group rotation={[Math.PI / 4, 0, 0]} position={[0, -4, -10]}>
            {lines.map((_, i) => (
                <LineGroup key={i} curve={_} index={i} />
            ))}
        </group>
    );
}

function Scene({ dictionary, locale }: { dictionary: any, locale: string }) {
  const cameraControlsRef = useRef<CameraControls>(null);

  const goToHero = () => {
    cameraControlsRef.current?.setLookAt(0, 2, 10, 0, 0, 0, true);
  };

  const goToServices = () => {
    // Look at services zone
    cameraControlsRef.current?.setLookAt(35, 2, -5, 40, 0, -20, true);
  };

  const goToWork = () => {
    // Look at work zone
    cameraControlsRef.current?.setLookAt(-35, 2, -5, -40, 0, -20, true);
  };

  return (
    <>
      <CameraControls 
        ref={cameraControlsRef} 
        minDistance={5} 
        maxDistance={40}
        maxPolarAngle={Math.PI / 2 - 0.05} // Prevent camera going below ground
        dollySpeed={0.5}
        smoothTime={0.4}
        draggingDampingFactor={0.1}
      />
      <ambientLight intensity={0.5} />
      <fog attach="fog" args={['#ffffff', 10, 50]} />
      <WaveLines />
      
      {/* Hero Zone */}
      <group position={[0, 0, 0]}>
        <Html transform distanceFactor={15} position={[0, 2, 0]} className="w-[800px] select-none text-center">
          <div className="flex flex-col items-center pointer-events-auto">
            <h5 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6 cursor-pointer hover:scale-105 transition-transform" onClick={goToHero}>
              {dictionary.hero.eyebrow}
            </h5>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.05] mb-8 text-foreground text-center">
              {dictionary.hero.headline1}<span className="text-accent underline decoration-accent/30 underline-offset-8">{dictionary.hero.headlineHighlight}</span>{dictionary.hero.headline3} <br />
              <span className="text-foreground/80">{dictionary.hero.subheadline}</span>
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-lg mb-12 text-center font-light">
              {dictionary.hero.description}
            </p>
            <div className="flex gap-6">
              <button onClick={goToServices} className="glow-btn bg-white border border-gray-200 shadow-xl shadow-primary/5 text-foreground font-bold tracking-widest px-8 py-4 rounded-full text-xs uppercase hover:bg-gray-50 hover:border-primary/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                <span>{dictionary.home?.servicesSubtitle || "SERVICES"}</span>
                <span>&rarr;</span>
              </button>
              <button onClick={goToWork} className="glow-btn bg-deep-navy border border-gray-200 text-foreground font-bold tracking-widest px-8 py-4 rounded-full text-xs uppercase hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                <span>&larr;</span>
                <span>{dictionary.home?.workSubtitle || "WORK"}</span>
              </button>
            </div>
            
            <div className="mt-16 animate-bounce text-foreground/40 text-xs tracking-[0.3em]">
                DRAG TO EXPLORE
            </div>
          </div>
        </Html>
      </group>

      {/* Services Zone */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          <group position={[40, 0, -20]} rotation={[0, -Math.PI / 4, 0]}>
             <Html transform distanceFactor={15} position={[0, 2, 0]} className="w-[900px] select-none pointer-events-auto">
                <div className="bg-white/90 backdrop-blur-xl p-12 rounded-[2rem] border border-gray-200 shadow-2xl shadow-primary/5">
                  <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
                    <h3 className="text-5xl font-serif text-foreground">
                      {dictionary.services.title1}<span className="text-primary italic">{dictionary.services.titleHighlight}</span>
                    </h3>
                    <button onClick={goToHero} className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors hover:-translate-x-2 flex items-center gap-2">
                      <span>&larr;</span> BACK TO HUB
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    {[
                      { title: "Enterprise LLM", icon: <Brain className="w-8 h-8 text-primary mb-6" /> },
                      { title: "Predictive Analytics", icon: <LineChart className="w-8 h-8 text-primary mb-6" /> },
                      { title: "Autonomous Agents", icon: <Bot className="w-8 h-8 text-primary mb-6" /> },
                    ].map((s, i) => (
                      <div key={i} className="bg-deep-navy p-8 rounded-3xl hover:-translate-y-3 transition-transform cursor-pointer border border-transparent hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                        {s.icon}
                        <h4 className="font-bold text-foreground text-xl leading-tight">{s.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
             </Html>
          </group>
      </Float>

      {/* Work Zone */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <group position={[-40, 0, -20]} rotation={[0, Math.PI / 4, 0]}>
             <Html transform distanceFactor={15} position={[0, 2, 0]} className="w-[900px] select-none pointer-events-auto">
                <div className="bg-white/90 backdrop-blur-xl p-12 rounded-[2rem] border border-gray-200 shadow-2xl shadow-primary/5">
                  <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
                    <h3 className="text-5xl font-serif text-foreground">
                      Selected <span className="text-primary italic">Work</span>
                    </h3>
                    <button onClick={goToHero} className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-2">
                      BACK TO HUB <span>&rarr;</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 bg-deep-navy rounded-3xl hover:-translate-y-2 transition-transform cursor-pointer border border-transparent hover:border-primary/20">
                      <div className="text-5xl font-bold text-primary mb-3">+34%</div>
                      <div className="text-xs text-foreground/60 uppercase tracking-[0.2em] font-semibold mb-6">Efficiency Increase</div>
                      <h4 className="text-2xl font-serif text-foreground">Global Logistics Optimization</h4>
                    </div>
                    <div className="p-8 bg-deep-navy rounded-3xl hover:-translate-y-2 transition-transform cursor-pointer border border-transparent hover:border-primary/20">
                      <div className="text-5xl font-bold text-primary mb-3">99.9%</div>
                      <div className="text-xs text-foreground/60 uppercase tracking-[0.2em] font-semibold mb-6">Anomaly Detection Rate</div>
                      <h4 className="text-2xl font-serif text-foreground">Automated Financial Auditing</h4>
                    </div>
                  </div>
                </div>
             </Html>
          </group>
      </Float>
    </>
  );
}

export default function InteractiveHub() {
  const { dictionary, locale } = useDictionary();
  return (
    <div className="w-full h-screen absolute inset-0 bg-white">
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
        <Scene dictionary={dictionary} locale={locale} />
      </Canvas>
      {/* Decorative gradients */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      
      {/* 2D HUD Overlays */}
      <div className="absolute bottom-0 w-full z-20 pointer-events-auto">
        <CompanyMarquee />
      </div>
    </div>
  );
}
