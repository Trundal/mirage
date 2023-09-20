import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from '@react-three/drei'

export default function ToPScene() {
  const gltfPath = '/TOP_Logo.glb' // Replace with the path to your GLB model
  const modelScale: [number, number, number] = [25, 25, 25]

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[1, 1, 1]} />
      <Environment preset="dawn" background={false} blur={0.6} />

      <Suspense fallback={null}>
        <group scale={modelScale}>
          <Model gltfPath={gltfPath} />
        </group>
      </Suspense>
    </Canvas>
  )
}

const Model = ({ gltfPath }: any) => {
  const gltf = useLoader(GLTFLoader, gltfPath)

  // Access the first mesh in the GLTF model and apply a texture
  if (gltf.scene) {
    const model = gltf.scene.children[0]
    return <primitive object={model} />
  }

  return null
}
