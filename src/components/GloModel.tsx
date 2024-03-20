import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color, MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'

const silverMaterial = new MeshStandardMaterial({
  color: 0xc0c0c0, // Silver color
  roughness: 0.4, // Moderate roughness
  metalness: 0.8, // High metalness
  emissive: 0x000000, // No emissive color
})

// 2. Gold Metal
const goldMaterial = new MeshStandardMaterial({
  color: 0xffd700, // Gold color
  roughness: 0.2, // Low roughness
  metalness: 0.9, // Very high metalness
  emissive: 0x000000, // No emissive color
})

// 3. Copper Metal
const copperMaterial = new MeshStandardMaterial({
  color: 0xb87333, // Copper color
  roughness: 0.3, // Moderate roughness
  metalness: 0.7, // High metalness
  emissive: 0x000000, // No emissive color
})

// 4. Steel Metal
const steelMaterial = new MeshStandardMaterial({
  color: 0x43464b, // Steel color
  roughness: 0.5, // Moderate roughness
  metalness: 0.6, // Moderate metalness
  emissive: 0x000000, // No emissive color
})

// 5. Bronze Metal
const bronzeMaterial = new MeshStandardMaterial({
  color: 0xcd7f32, // Bronze color
  roughness: 0.4, // Moderate roughness
  metalness: 0.8, // High metalness
  emissive: 0x000000, // No emissive color
})

// 6. Aluminum Metal
const aluminumMaterial = new MeshStandardMaterial({
  color: 0x808080, // Aluminum color
  roughness: 0.2, // Low roughness
  metalness: 0.9, // Very high metalness
  emissive: 0x000000, // No emissive color
})

// 7. Titanium Metal
const titaniumMaterial = new MeshStandardMaterial({
  color: 0x778899, // Titanium color
  roughness: 0.1, // Very low roughness
  metalness: 1.0, // Maximum metalness
  emissive: 0x000000, // No emissive color
})

// 8. Brass Metal
const brassMaterial = new MeshStandardMaterial({
  color: 0xd4af37, // Brass color
  roughness: 0.3, // Moderate roughness
  metalness: 0.8, // High metalness
  emissive: 0x000000, // No emissive color
})

export function Model(props: any) {
  const model: any = useGLTF('/models/glo_device_wpp.glb')
  const { nodes, materials } = model
  const { primary, secondary } = props.colors
  const primaryColor = new MeshStandardMaterial({
    color: primary,
    roughness: 0.4, // Moderate roughness
    metalness: 0.8, // High metalness
    emissive: 0x000000, // No emissive color
  })
  const secondaryColor = new MeshStandardMaterial({
    color: secondary,
    roughness: 0.1, // Very low roughness
    metalness: 1.0, // Maximum metalness
    emissive: 0x000000,
  })
  const ref: any = useRef()
  console.log('COLOR', primary)

  return (
    <group rotation={[0, 0, 0]} ref={ref} {...props} position={[-87, -1, 30]}>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_152.geometry}
          // material={brassMaterial} vaa

          material={primaryColor}
          material-envMapIntensity={1}
          scale={0.03}
        />
      </group>
      {/* TAPA CIRCULA */}
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_157.geometry}
          //   material={secondaryColor}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_153.geometry}
          //   material={secondaryColor}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_154.geometry}
          //   material={secondaryColor}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_155.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_156.geometry}
          //   material={secondaryColor}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_158.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_151.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_163.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_160.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_166.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_161.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_168.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_169.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_177.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_178.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_164.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_176.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_109.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_146.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_145.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_150.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_147.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_144.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_148.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_128.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_143.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_170.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_179.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_165.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_180.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_186.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_173.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_181.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_182.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_171.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_185.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_183.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_184.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_175.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_187.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_172.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_188.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_189.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_174.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_190.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_191.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_192.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_194.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_193.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_202.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_195.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_196.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_197.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_198.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_199.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_200.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_201.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_111.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_149.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_107.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_117.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_113.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_102.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_115.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_112.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_114.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_116.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_104.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_118.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_103.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_105.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_108.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_119.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_120.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_121.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_106.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_122.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_123.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_124.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_125.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_110.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_127.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_138.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_132.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_141.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_126.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_133.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_131.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_139.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_130.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_134.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_142.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_137.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_135.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_136.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_140.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_129.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_162.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_167.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_159.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
      <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={secondaryColor}
          scale={0.03}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/glo_device_wpp.glb')
