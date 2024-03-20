import { Environment, Lightformer, OrbitControls, useGLTF, CameraControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import {Model} from '../../components/GloModel'
import { Plane } from '../../components/Plane'
import {
  FilmPass,
  WaterPass,
  UnrealBloomPass,
  LUTPass,
  LUTCubeLoader,
  RGBELoader,
} from 'three-stdlib'
import * as THREE from 'three'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })
  const lights = useControls('Lights', {
    x: 2,
    y: 2,
    z: 2,
    color: '#FFF'
  })
  const modelColors = useControls('Model',{
    primary: '#000',
    secondary: '#FFF',
  })
  const lightRef = useRef<any>()

// FOR TESTING CAMERA POSITION
useFrame((state)=> {
console.log(state.camera)
  // console.log(state.camera.position)
  // console.log(state.camera.rotation)

})

const texture = useLoader(
  RGBELoader,
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr'
  // 'https://cdn.polyhaven.com/asset_img/primary/cayley_interior.png?height=780'
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/pretville_cinema_2k.hdr'
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/cayley_interior_2k.hdr' // interior good
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/pine_attic_2k.hdr' // interior green wood
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/brown_photostudio_02_2k.hdr' // interior white/black
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/vestibule_2k.hdr' // interior pink lightblue
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/venice_sunset_2k.hdr' // outodor sunset
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/pedestrian_overpass_2k.hdr' // outdoor sunset 2
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/signal_hill_sunrise_2k.hdr'// outdoor sunset 3
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/outdoor_umbrellas_2k.hdr' // outdoor paraguas
)
texture.mapping = THREE.EquirectangularReflectionMapping

  return (
    <>
      {performance && <Perf position='top-left' />}
      {/* <Environment map={texture} /> */}
      {/* <color attach="background" args={['#141622']} /> */}
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
      <OrbitControls autoRotate />

      {/* <directionalLight
              color={lights.color}
              // intensity={2}
              intensity={0.2}
              position={[2,2,2]}
              castShadow
              shadow-mapSize={[512, 512]}
            /> */}
      <Model colors={{ primary: modelColors.primary, secondary: modelColors.secondary}}/>
      {/* <Plane/> */}
      {/* <axesHelper/> */}
    </>
  )
}

export { Scene }
