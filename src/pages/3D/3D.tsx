import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { ColorButtons } from '../../components/ColorButtons'
import { Layout } from '../../components/Layout'
import { useSceneStore } from '../../stores/sceneStore'
import { Scene } from './Scene'

export const Model = () => {
  const changeColor = useSceneStore((state: any) => state.changeColor)
  const color = useSceneStore((state: any) => state.color)

  return (
    <>
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'end',
          display: 'flex',
        }}
      >
        <div
          style={{ width: 400, height: '15%', display: 'flex', justifyContent: 'center' }}
        >
          <ColorButtons selected={color} onClick={changeColor} />
        </div>
      </div>
      <Layout>
        {/* <Leva
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
        /> */}

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
            position: [6, 4, 1],
          }}
          shadows
        >
          <Scene />
        </Canvas>
      </Layout>
    </>
  )
}
