'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

function House() {
  return (
    <group>
      {/* Main Structure */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[4, 3, 3]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 3.75, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <cylinderGeometry args={[0, 3, 2, 4]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      {/* Door */}
      <mesh position={[0, 0.75, 1.51]}>
        <boxGeometry args={[1, 1.5, 0.05]} />
        <meshStandardMaterial color="#0A1628" />
      </mesh>
    </group>
  )
}

function SolarPanel({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 0.8) * 0.2 + 0.8
      ;(meshRef.current.material as any).emissiveIntensity = pulse
    }
  })
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} castShadow>
      <boxGeometry args={[1.2, 0.05, 0.8]} />
      <meshStandardMaterial
        color="#1a1a1a"
        emissive="#00D4FF"
        emissiveIntensity={1}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  )
}

function Battery({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.2) * 0.3 + 0.7
      ;(meshRef.current.material as any).emissiveIntensity = pulse
    }
  })
  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxGeometry args={[0.5, 1, 0.5]} />
      <meshStandardMaterial 
        color="#2d3748" 
        emissive="#FF8C42" 
        emissiveIntensity={1} 
      />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A1628]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[8, 6, 12]} fov={35} />
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, 5]} intensity={1} color="#00D4FF" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, -1, 0]}>
            <House />
            {/* Panels on Roof */}
            <SolarPanel position={[-1, 4.2, 0.5]} rotation={[-Math.PI / 4, 0, 0]} />
            <SolarPanel position={[1, 4.2, 0.5]} rotation={[-Math.PI / 4, 0, 0]} />
            <SolarPanel position={[-1, 4.2, -0.5]} rotation={[Math.PI / 4, 0, 0]} />
            <SolarPanel position={[1, 4.2, -0.5]} rotation={[Math.PI / 4, 0, 0]} />
            
            {/* Battery outside */}
            <Battery position={[2.5, 0.5, 1]} />
          </group>
        </Float>

        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2} 
          far={4.5} 
        />
        
        <Environment preset="night" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
    </div>
  )
}
