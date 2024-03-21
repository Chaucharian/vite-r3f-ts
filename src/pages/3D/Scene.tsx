import { Environment, Lightformer, OrbitControls, useGLTF, CameraControls, PivotControls, SpotLight, useDepthBuffer } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
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
import { ColorButtons } from '../../components/ColorButtons'
import { useSceneStore } from '../../stores/sceneStore'
import { Vector3 } from 'three'

function Scene() {
  // const { performance } = useControls('Monitoring', {
  //   performance: false,
  // })
  // const lights = useControls('Lights', {
  //   x: 2,
  //   y: 2,
  //   z: 2,
  //   color: '#FFF'
  // })
  // const modelColors = useControls('Model',{
  //   primary: '#000',
  //   secondary: '#FFF',
  // })
  const lightRef = useRef<any>()
  const color = useSceneStore((state:any) => state.color);

// FOR TESTING CAMERA POSITION
// useFrame((state)=> {
// console.log(state.camera)
// })

const texture = useLoader(
  RGBELoader,
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr'
  // 'https://cdn.polyhaven.com/asset_img/primary/cayley_interior.png?height=780'
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/pretville_cinema_2k.hdr'
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/cayley_interior_2k.hdr' // interior good
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/pine_attic_2k.hdr' // interior green wood
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/brown_photostudio_02_2k.hdr' // interior white/black
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/vestibule_2k.hdr' // interior pink lightblue
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/venice_sunset_2k.hdr' // outodor sunset
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/pedestrian_overpass_2k.hdr' // outdoor sunset 2
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/signal_hill_sunrise_2k.hdr'// outdoor sunset 3
  // 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/outdoor_umbrellas_2k.hdr' // outdoor paraguas
)
texture.mapping = THREE.EquirectangularReflectionMapping
const depthBuffer = useDepthBuffer({ frames: 1 })

  return (
    <>
      {/* {performance && <Perf position='top-left' />} */}
      <Environment map={texture}   blur={0.2} />
      {/* <ambientLight intensity={0.9} color="white"/> */}
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow /> */}
      {/* <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} color="white" rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={1} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={0.9} color="white" rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          <Lightformer form="circle" intensity={0.9} color="white" rotation-y={-Math.PI / 4} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment> */}

      <OrbitControls autoRotate />
      {/* <fog attach="fog" args={['#202020', 5, 20]} /> */}

      {/* <PivotControls anchor={[0, 0, 0]} depthTest={false} 
      visible={false}
      // visible={gizmo} ref={pivotRef}
      >
      <directionalLight
              color={'white'}
              intensity={2}
              // intensity={0.2}
              position={[2,2,3]}
              castShadow
              shadow-mapSize={[512, 512]}
              
            />
            </PivotControls> */}
                  <PivotControls rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed lineWidth={2}>
                  <directionalLight
              color={'white'}
              intensity={2}
              // intensity={0.2}
              position={[2,2,3]}
              castShadow
              shadow-mapSize={[512, 512]}
              
            />
{/* <spotLight position={[8, -2, 0]} angle={0.90} penumbra={1} shadow-mapSize={2048} castShadow  intensity={0.2}/> */}
</PivotControls>
      <Model colors={color}/>
      {/* <PivotControls anchor={[0, 0, 0]} depthTest={false} >
      <MovingSpot depthBuffer={depthBuffer} color="white" position={[6, 3, 2]} />
      </PivotControls> */}
      {/* <Plane/> */}
      {/* <axesHelper/> */}
    </>
  )
}


function MovingSpot({ vec = new Vector3(), ...props }) {
  const light:any = useRef()
  const viewport = useThree((state) => state.viewport)
  // useFrame((state) => {
  //   light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
  //   light.current.target.updateMatrixWorld()
  // })
  return <SpotLight ref={light} penumbra={0.2} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={0.3} {...props} />
}

export { Scene }

