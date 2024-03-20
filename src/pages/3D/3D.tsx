import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { Layout } from '../../components/Layout'
import { Scene } from './Scene'

export const Model = () => {
  return (
    <Layout>
      <Leva
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputColorSpace: SRGBColorSpace,
        }}
        camera={{
          fov: 5,
          // fov: 70,
          near: 0.1,
          far: 200,
          zoom: 0.125,
          position: [6,4, 1],
        }}
        shadows
      >
        <Scene />
      </Canvas>
    </Layout>
  )
}
