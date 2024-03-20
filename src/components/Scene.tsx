import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import {Model} from './GloModel'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })
  const lights = useControls('Lights', {
    x: 2,
    y: 2,
    z: 2,
    rotationX: { value: 0, min: 0, max: Math.PI * 2 },
    rotationY: { value: 0, min: 0, max: Math.PI * 2 },
    rotationZ: { value: 0, min: 0, max: Math.PI * 2 },

  })
  const modelColors = useControls('Model',{
    primary: '#000',
    secondary: '#FFF',
  })
  const lightRef = useRef<any>()

  return (
    <>
      {performance && <Perf position='top-left' />}
      <Environment preset='city' />

      <OrbitControls makeDefault />
      <spotLight
        ref={lightRef}
        position={[lights.x, lights.y, lights.z]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />

      <Model colors={{ primary: modelColors.primary, secondary: modelColors.secondary}}/>
    </>
  )
}

export { Scene }
