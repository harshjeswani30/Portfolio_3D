import { useTexture } from '@react-three/drei'

export default function Mug(props)
{
    const reactMugTexture = useTexture('./Textures/ReactMugBaked.jpg')
    const ThreejsMugTexture = useTexture('./Textures/ThreejsMugBaked.jpg')
    const SymfonyMugTexture = useTexture('./Textures/SymfonyMugBaked.jpg')
    const BlenderMugTexture = useTexture('./Textures/BlenderMugBaked.jpg')
    const nextjsMugTexture = useTexture('./Textures/NextMugBaked.jpg')
    const gsapMugTexture = useTexture('./Textures/GSAPMugBaked.jpg')

    return <>
      {/* React Mug */}
      <mesh
        geometry={props.nodes.ReactMug.geometry}
        position={[-0.4, 1, 0]}
      >
        <meshBasicMaterial map={reactMugTexture} map-flipY={false} />
      </mesh>

      <mesh
        geometry={props.nodes.ThreeJSMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={ThreejsMugTexture} map-flipY={false} />

      </mesh>

      <mesh        
        geometry={props.nodes.SymfonyMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={SymfonyMugTexture} map-flipY={false} />

      </mesh>
      
      <mesh    
        geometry={props.nodes.BlenderMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={BlenderMugTexture} map-flipY={false} />

      </mesh>

      {/* Next.js Mug - positioned more towards center of table */}
      <mesh
        geometry={props.nodes.ReactMug.geometry}
        position={[0.01, 1, 0.03]}
      >
        <meshBasicMaterial map={nextjsMugTexture} map-flipY={false} />
      </mesh>

      {/* GSAP Mug - positioned to match camera view */}
      <mesh
        geometry={props.nodes.ReactMug.geometry}
        position={[-0.85, 1, 0.15]}
      >
        <meshBasicMaterial map={gsapMugTexture} map-flipY={false} />
      </mesh>
    </>
}