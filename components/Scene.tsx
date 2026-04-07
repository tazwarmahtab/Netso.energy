'use client'

import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, Sparkles, ContactShadows, Stars } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { MotionValue, useTransform } from 'framer-motion'

interface SceneProps {
  scrollYProgress: MotionValue<number>
}

function CameraRig({ scrollYProgress }: SceneProps) {
  const { camera } = useThree()
  
  // Camera path: Hero (wide) -> Problem (close-up on house) -> Solution (dashboard/abstract) -> Globe (far)
  const posX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 8, -5, 10, 0, 0])
  const posY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [5, 2, 4, 3, 15, 5])
  const posZ = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [15, 10, 15, 20, 25, 20])
  
  useFrame(() => {
    camera.position.set(posX.get(), posY.get(), posZ.get())
    camera.lookAt(0, 0, 0)
  })

  return null
}

function HomeModel({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.6], [1.5, 1, 0.5, 0])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.get()
      groupRef.current.scale.setScalar(scale.get())
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main House Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#0A1628" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 1.75, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[2.5, 1.5, 4]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.2} />
      </mesh>
      {/* Windows with "Energy" Glow */}
      {[...Array(4)].map((_, i) => (
        <mesh key={i} position={[1.51, 0, (i % 2 === 0 ? 0.8 : -0.8)]}>
          <planeGeometry args={[0.5, 0.8]} />
          <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

function SolarPanelModel({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const scale = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1.2, 1.2, 0])
  const posY = useTransform(scrollYProgress, [0.1, 0.3], [5, 3])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale.get())
      groupRef.current.position.y = posY.get()
      groupRef.current.rotation.x = -Math.PI / 6
    }
  })

  return (
    <group ref={groupRef} position={[0, 3, 0]}>
      <mesh castShadow>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="#1a2a4a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Grid Lines */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[(i - 2.5) * 0.6, 0.06, 0]}>
          <planeGeometry args={[0.02, 1.9]} rotation={[-Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  )
}

function BatteryModel({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const scale = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0])
  const rotationY = useTransform(scrollYProgress, [0.3, 0.6], [0, Math.PI])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale.get())
      groupRef.current.rotation.y = rotationY.get()
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Sleek Battery Enclosure */}
      <mesh castShadow>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="#0A1628" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Charge Indicator Light */}
      <mesh position={[0, 0.5, 0.26]}>
        <planeGeometry args={[0.6, 0.1]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} />
      </mesh>
      <Sparkles count={20} scale={2} size={2} speed={0.5} color="#00D4FF" />
    </group>
  )
}

function EnergyGlobeModel({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const scale = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 4, 4])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale.get())
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#00D4FF" wireframe transparent opacity={0.2} />
      </mesh>
      {/* Floating data points */}
      {[...Array(20)].map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i) * 1.1,
          Math.cos(i * 0.5) * 1.1,
          Math.sin(i * 1.5) * 1.1
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" />
        </mesh>
      ))}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

export default function Scene({ scrollYProgress }: SceneProps) {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A1628]">
      <Canvas shadows gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={50} />
          <CameraRig scrollYProgress={scrollYProgress} />
          
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00D4FF" />
          <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#FF8C42" />
          
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <HomeModel scrollYProgress={scrollYProgress} />
            <SolarPanelModel scrollYProgress={scrollYProgress} />
            <BatteryModel scrollYProgress={scrollYProgress} />
            <EnergyGlobeModel scrollYProgress={scrollYProgress} />
          </Float>
          
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2.4} far={4.5} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}