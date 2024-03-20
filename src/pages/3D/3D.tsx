import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { Layout } from '../../components/Layout'
import { Scene } from '../../components/Scene'

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
          // toneMapping: ACESFilmicToneMapping,
          // outputColorSpace: SRGBColorSpace,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
          position: [3, 2, 9],
        }}
        // camera={{ position: [-0.5, 1, 2] }}
        shadows
      >
        <Scene />
        <axesHelper args={[5]} />

      </Canvas>
    </Layout>
  )
}
