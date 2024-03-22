import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three'
import { Button } from '../../components/Button'
import { ButtonBase } from '../../components/ButtonBase'
import { ColorButtons } from '../../components/ColorButtons'
import { Layout } from '../../components/Layout'
import { useSceneStore } from '../../stores/sceneStore'
import { Scene } from './Scene'
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import useStyles from './styles'
import { LegalAdvice } from '../../components/LegalAdvice'
import { Link } from 'react-router-dom'

const MModal: any = Modal

export const Model = () => {
  const changeColor = useSceneStore((state: any) => state.changeColor)
  const color = useSceneStore((state: any) => state.color)
  const [isModalOpen, openModal] = useState(false)
  const styles = useStyles()
  return (
    <Layout
    // styles={{ pointerEvents: 'all', position: 'absolute', top: 0, height: '100px' }}
    >
      <>
        <div
          style={{
            // position: 'fixed',
            // zIndex: 10,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'end',
            display: 'flex',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: 400,
              height: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'all',
              zIndex: 999999,
              // marginBottom: '9vh',
            }}
          >
            <ColorButtons selected={color} onClick={changeColor} />
            <div style={{ height: '6%' }} />
            <ButtonBase
              label='VEDI QR'
              onClick={() => openModal(true)}
              styles={{
                background:
                  'linear-gradient(90deg, rgba(227,86,5,1) 0%, rgba(250,157,27,1) 100%)',
              }}
            />
            <div style={{ height: '6%' }} />
            <Link to='/bye'>
              <ButtonBase
                label='FINE'
                onClick={() => {}}
                styles={{
                  background:
                    'linear-gradient(90deg, rgba(227,86,5,1) 0%, rgba(250,157,27,1) 100%)',
                }}
              />
            </Link>

            <MModal open={isModalOpen} onClose={() => openModal(false)}>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  height: 400,
                }}
              >
                <h3 style={{ textAlign: 'center' }}>
                  Inquedra il QR code e mostra la tua scelta al nostro staff
                </h3>
                <img src={color.qr} width='100%' height='100%' />
              </div>
            </MModal>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '180px',
            width: '100%',
            height: '100%',
            pointerEvents: 'all',
          }}
        >
          {/* TEXTO ROTA EL MODELO */}
          <div
            style={{
              // zIndex: -10,
              position: 'absolute',
              top: '0',
              width: '100%',
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'center',
              fontSize: '20px',
              marginBottom: '20px',
              fontFamily: 'MontBold',
            }}
          >
            <h1>Ruota il modello 3D</h1>
          </div>

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
              // zoom: 0.125,
              // zoom: 0.220,
              zoom: 1,
              // position: [6, 4, 1],
              // position: [10, 10, 10],
              // position: [24, 10, 16],
              position: [-6, 6, 30],
              // position: [2, 3, 38], // este va
            }}
            shadows
          >
            <Scene />
          </Canvas>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            // height: '100vh',
            // alignContent: 'end',
            // display: 'flelx',
            width: '100%',
            pointerEvents: 'none',
          }}
        >
          <LegalAdvice />
        </div>
      </>
    </Layout>
  )
}
