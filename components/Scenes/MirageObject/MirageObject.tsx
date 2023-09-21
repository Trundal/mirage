import React, { useEffect } from 'react'
import * as THREE from 'three'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ThreeJsComponent: React.FC = () => {
  useEffect(() => {
    // Create a Three.js scene, camera, and renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document
      .getElementById('canvas-container')
      ?.appendChild(renderer.domElement)

    // Load the GLTF model
    const loader = new GLTFLoader()
    loader.load('/TOP_Logo.glb', (gltf: any) => {
      const model = gltf.scene

      // You may need to adjust the model's position, rotation, and scale
      model.position.set(0, 0, 0)
      model.rotation.set(0, 0, 0)
      model.scale.set(1, 1, 1)

      // Add the loaded model to the scene
      scene.add(model)
    })

    // Set camera position
    camera.position.z = 5

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Add any additional animations or updates here

      // Render the scene
      renderer.render(scene, camera)
    }

    // Start the animation loop
    animate()
  }, [])

  return <div id="canvas-container" />
}

export default ThreeJsComponent
