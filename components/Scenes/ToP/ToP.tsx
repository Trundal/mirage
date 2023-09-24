import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from '@react-three/drei'

function CustomCanvas() {
  return (
    <Canvas>
      <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[1, 1, 1]} />
      <Environment preset="dawn" background={false} blur={0.6} />

      <Suspense fallback={null}>
        <group>
          <Model />
        </group>
      </Suspense>
    </Canvas>
  )
}

function Model() {
  const gltfPath: string = '/TOP_Logo.glb'
  const gltf = useLoader(GLTFLoader, gltfPath)
  const modelRef = useRef<any>()

  // Handle the case where the GLTF model does not load as expected
  if (!gltf.scene) {
    console.error('GLTF model scene is empty or undefined:', gltfPath)
    return null
  }

  const model = gltf.scene.children[0]

  if (!model) {
    console.error('GLTF model does not contain the expected mesh:', gltfPath)
    return null
  }

  modelRef.current = model // Store the model reference for animation

  // Set the initial scale of the model
  model.scale.set(25, 25, 25)

  return <PrimitiveModel model={model} modelRef={modelRef} />
}

// @ts-ignore
function PrimitiveModel({ model, modelRef }) {
  useFrame((state, delta) => {
    // Move the model horizontally (left to right and back)
    modelRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2

    // Rotate the model slowly around its center
    modelRef.current.rotation.y += 0.02 * delta // Adjust the rotation speed as needed

    // Optionally, you can scale the model over time
    modelRef.current.scale.x = 25 + Math.sin(state.clock.elapsedTime * 0.5) * 5
    modelRef.current.scale.y = 25 + Math.sin(state.clock.elapsedTime * 0.5) * 5
    modelRef.current.scale.z = 25 + Math.sin(state.clock.elapsedTime * 0.5) * 5
  })

  return <primitive object={model} />
}

export default function ToPScene() {
  return <CustomCanvas />
}
