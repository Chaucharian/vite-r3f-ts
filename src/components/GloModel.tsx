import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color, MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { modelColors } from '../mock/modelColors'

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
  // const model: any = useGLTF('/models/glo_device_wpp.glb')
  // const model: any = useGLTF('/models/glo_latest.glb')
  const model: any = useGLTF('https://res.cloudinary.com/dhvyit5lz/image/upload/v1711073674/b3hosao2u6busaixi1fr.glb')

  const { nodes, materials } = model
  const { primary, secondary, detail, detail2 } = props.color
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
  const displayColor = new MeshStandardMaterial({
    color: '#000',
    roughness: 0.3, // Moderate roughness
    metalness: 0.8, // High metalness
    emissive: 0x000000, // No emissive color
  })
  const whiteColor = new MeshStandardMaterial({
    color: '#FFF',
    roughness: 0.3, // Moderate roughness
    metalness: 0.8, // High metalness
    emissive: 0x000000, // No emissive color
  })
  const detailColor = new MeshStandardMaterial({
    // for black
    color: detail ? detail : primary,
    roughness: 0.1, // Very low roughness
    metalness: 1.0, // Maximum metalness
    emissive: 0x000000,
  })
  const detail2Color = new MeshStandardMaterial({
    // for black
    color: detail2 ? detail2 : primary,
    roughness: 0.1, // Very low roughness
    metalness: 1.0, // Maximum metalness
    emissive: 0x000000,
  })
  const ref: any = useRef()

  console.log('MATERIAL', materials['Metal (1)'])

  // materials['Metal (1)'].color.set(primary)
  materials['Plastic'].color.set(primary)
  materials['Metal'].color.set(primary)
  materials['Metal (1) [imported]'].color.set(secondary)

  const tapaColor = new MeshStandardMaterial(materials['Metal (1) [imported]'])
  tapaColor.color.set(primary)

  const parteTraseraColor = new MeshStandardMaterial(materials.Metal)
  parteTraseraColor.color.set(secondary)


  // tapa roja
  if (primary === '#242324') {
    tapaColor.color.set(secondary)
  }

  return (
    <group {...props} dispose={null} 
    // scale={0.05}
    scale={0.014}
    onPointerDown={() => {
      document.documentElement.style.cursor = 'grab' // Set the cursor style
    }}
    onPointerUp={() => {
      document.documentElement.style.cursor = 'default' // Reset the cursor style to default
    }}
    position={[0, 0, 0]}
    >
      <group  rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          // material={materials['Metal (1) [imported]']}
          material={parteTraseraColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          // material={materials.Plastic}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials['Metal (2)']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials['Metal (1) [imported]']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.display.geometry}
        material={displayColor}
        // position={[4.634, 34.667, 32.304]}
        position={[5, 36, -6.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tapa.geometry}
        // material={materials['Metal (1) [imported]']}
        material={tapaColor}
        // position={[-17.95, 62.294, 32.002]}
        position={[-18, 63.5, -6.6]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.anillo.geometry}
        material={detailColor}
        // position={[4.634, 34.667, 32.304]}
        position={[4.7, 35.92, -6.3]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
    //   <group {...props} dispose={null} scale={0.05} >
    //   <group position={[0, 10.847, -10.868]} rotation={[-Math.PI / 2, 0, 0]}>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh059_1.geometry}
    //       material={materials['Metal (2)']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh059_2.geometry}
    //       material={materials.Plastic}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh059_3.geometry}
    //       material={materials['Metal (1) [imported]']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh059_4.geometry}
    //       material={materials['Metal (1)']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mesh059_5.geometry}
    //       material={materials.Metal}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Mesh001.geometry}
    //     material={materials['Plastic.001']}
    //     position={[13.677, -10.868, -10.847]}
    //     rotation={[-Math.PI / 2, 0, 0]}
    //   />
    // </group>
  )
}

// useGLTF.preload('/models/glo_device_wpp.glb')
// useGLTF.preload('/models/glo_latest.glb')
// useGLTF.preload('/models/glo_device_blender.glb')
useGLTF.preload('https://res.cloudinary.com/dhvyit5lz/image/upload/v1711073674/b3hosao2u6busaixi1fr.glb')

//blender 1first
// <group {...props} dispose={null} scale={0.01}>
//   <group position={[0, 92.998, -13.927]} rotation={[-Math.PI / 2, 0, 0]} scale={2.949}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Mesh_1.geometry}
//       // material={materials['Metal (1)']}
//       material={materials.Metal}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Mesh_2.geometry}
//       material={materials['Metal (1) [imported]']}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Mesh_3.geometry}
//       // material={materials.Metal}
//       material={materials['Metal (1)']}

//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Mesh_4.geometry}
//       material={materials.Plastic}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Mesh_5.geometry}
//       material={materials['Metal (2)']}
//     />
//   </group>
// </group>

// <group rotation={[0, 0, 0]} ref={ref} {...props} position={[-87, -1, 30]}>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_152.geometry}
//       // material={brassMaterial} vaa

//       material={primaryColor}
//       material-envMapIntensity={1}
//       scale={0.03}
//     />
//   </group>
//   {/* TAPA CIRCULA */}
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_157.geometry}
//       //   material={secondaryColor}
//       material={detail2Color}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_153.geometry}
//       //   material={secondaryColor}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_154.geometry}
//       //   material={secondaryColor}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_155.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_156.geometry}
//       material={detailColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_158.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_151.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_163.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_160.geometry}
//       material={displayColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_166.geometry}
//       material={displayColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_161.geometry}
//       material={primaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_168.geometry}
//       material={whiteColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_169.geometry}
//       material={whiteColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_177.geometry}
//       material={whiteColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_178.geometry}
//       material={whiteColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_164.geometry}
//       material={whiteColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_176.geometry}
//       material={whiteColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_109.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_146.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_145.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_150.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_147.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_144.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_148.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_128.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_143.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_170.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_179.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_165.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_180.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_186.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_173.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_181.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_182.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_171.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_185.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_183.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_184.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_175.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_187.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_172.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_188.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_189.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_174.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_190.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_191.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_192.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_194.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_193.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_202.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_195.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_196.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_197.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_198.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_199.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_200.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_201.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_111.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_149.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_107.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_117.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_113.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_102.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_115.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_112.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_114.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_116.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_104.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_118.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_103.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_105.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_108.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_119.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_120.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_121.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_106.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_122.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_123.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_124.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_125.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_110.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_127.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_138.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_132.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_141.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_126.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_133.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_131.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_139.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_130.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_134.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_142.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_137.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_135.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_136.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_140.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.068, 0, -17.86]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_129.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_162.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_167.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Obj_159.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
//   <group position={[10.067, 0, -17.857]} rotation={[-Math.PI / 2, 0, -0.424]}>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Object001.geometry}
//       material={secondaryColor}
//       scale={0.03}
//     />
//   </group>
// </group>
