import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './components/Cube'
import { Plane } from './components/Plane'
import { Sphere } from './components/Sphere'
import * as THREE from 'three'
import { GloModel } from './components/GloModel'


function Scene() {


  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  const { animate } = useControls('Cube', {
    animate: true,
  })


  const lights = useControls('Lights', {
    x: 2,
    y: 2,
    z: 2,
    rotationX:  { value: 0, min: 0, max: Math.PI * 2 },
    rotationY:  { value: 0, min: 0, max: Math.PI * 2 },
    rotationZ:  { value: 0, min: 0, max: Math.PI * 2 },
    // rotation: [ { value: 0, min: 0, max: Math.PI * 2 }, { value: 0, min: 0, max: Math.PI * 2 }, { value: 0, min: 0, max: Math.PI * 2 }]
  })


  const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)
  const lightRef = useRef<any>();

  //   useFrame(() => {
  //   lightRef.current.rotation.set( THREE.MathUtils.degToRad(lights.rotationX), lights.rotationY,  lights.rotationZ);
  // });
  const model = useGLTF('/models/glo_device.glb'); // Replace '/path/to/your/model.glb' with the path to your GLB model

  return (
    <>
      {performance && <Perf position='top-left' />}

      <OrbitControls makeDefault />
<spotLight ref={lightRef} position={[lights.x, lights.y, lights.z]}
// rotation={[THREE.MathUtils.degToRad( lights.rotation[0]), THREE.MathUtils.degToRad( lights.rotation[1]),THREE.MathUtils.degToRad( lights.rotation[2])]}
// rotation={[0.444,20,20]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}/>
      {/* <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} /> */}
{/* 
      <Cube ref={cubeRef} />
      <Sphere /> */}
      {/* <Sphere /> */}
      <ambientLight intensity={0.2} /> 
      <group>
      <primitive object={model.scene} position={[0, 1, 0]}
        children-0-castShadow/>

      </group>

      {/* <GloModel /> */}
      {/* <Plane/> */}
    </>
  )
}

export { Scene }
