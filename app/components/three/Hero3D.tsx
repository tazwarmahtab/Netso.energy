'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

function SolarPanel({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle emissive pulse
      const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.15 + 0.85
      ;(meshRef.current.material as any).emissiveIntensity = pulse
    }
  })
  return (
    <mesh ref={meshRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <boxGeometry args={[1, 0.05, 1]} />
      <meshStandardMaterial
        color="#1a1a1a"
        emissive="#FF8C42"
        emissiveIntensity={0.9}
        metalness={0.9}
        roughness={0.3}
      />
    </mesh>
  )
}

export default function Hero3D() {
  const panels: [number, number, number][] = []
  for (let x = -5; x <= 5; x++) {
    for (let z = -5; z <= 5; z++) {
      panels.push([x * 1.2, 0, z * 1.2])
    }
  }

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 8, 12]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
        <pointLight position={[-5, 5, -5]} intensity={0.8} color="#FF8C42" />
        <group>
          {panels.map((pos, i) => (
            <Float key={i} speed={0.8 - i * 0.05} rotationIntensity={0.1} floatIntensity={0.3}>
              <SolarPanel position={pos} />
            </Float>
          ))}
        </group>
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
    </div>
  )
}
