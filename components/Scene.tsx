'use client'

import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Float, Sparkles, ContactShadows } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { MotionValue, useTransform } from 'framer-motion'

interface SceneProps {
  scrollYProgress: MotionValue<number>
}

function CameraRig({ scrollYProgress }: SceneProps) {
  const { camera } = useThree()
  
  // Define camera path based on scroll progress
  const posX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 8, -8, 0, 10, 0])
  const posY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [5, 2, 4, 3, 2, 8])
  const posZ = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [15, 12, 18, 15, 20, 25])
  
  useFrame(() => {
    camera.position.set(posX.get(), posY.get(), posZ.get())
    camera.lookAt(0, 0, 0)
  })

  return null
}

function HomeEnergyModel({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [1.2, 1.5, 1.5, 0.8])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY.get()
      groupRef.current.scale.setScalar(scale.get())
    }
  })

  return (
    <group ref={groupRef}>
      {/* Stylized Modern Home (Base) */}
      <mesh position={[0, -1, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#0A1628" roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <cylinderGeometry args={[0, 3, 1, 4]} />
        <meshStandardMaterial color="#1a2a4a" />
      </mesh>

      {/* Solar Panels (Stylized) */}
      {[...Array(4)].map((_, i) => (
        <mesh 
          key={i} 
          position={[(i % 2 - 0.5) * 2, 1.1, (Math.floor(i / 2) - 0.5) * 2]} 
          rotation={[-Math.PI / 6, 0, 0]}
        >
          <planeGeometry args={[1.2, 0.8]} />
          <meshStandardMaterial 
            color="#FFB800" 
            emissive="#FFB800" 
            emissiveIntensity={0.2} 
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Power lines / Connectivity (Visual dots) */}
      <Sparkles count={50} scale={5} size={2} speed={0.3} color="#3498DB" />
    </group>
  )
}

function ConnectivityPulse({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const scale = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 4, 0])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale.get() + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.9, 1, 64]} />
        <meshStandardMaterial color="#3498DB" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function GlobalGrid({ scrollYProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const scale = useTransform(scrollYProgress, [0.8, 1], [0, 10])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale.get())
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00D4FF" wireframe transparent opacity={0.1} />
      </mesh>
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
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#FFB800" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#3498DB" />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <HomeEnergyModel scrollYProgress={scrollYProgress} />
            <ConnectivityPulse scrollYProgress={scrollYProgress} />
            <GlobalGrid scrollYProgress={scrollYProgress} />
          </Float>
          
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2.4} far={4.5} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  )
}
