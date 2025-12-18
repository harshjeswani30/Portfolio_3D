import { useTexture } from '@react-three/drei'

export default function VinylsCovers(props)
{
    const arjitSinghTexture = useTexture('./Textures/Arjit Singh image.jpg')
    const seedheMautTexture = useTexture('./Textures/Seedhe maut Image.jpg')
    const weekndTexture = useTexture('./Textures/the weeknd image.jpg')
    const talwinderTexture = useTexture('./Textures/Talwinder image.jpg')
    const kishorKumarTexture = useTexture('./Textures/Kishor Kumar image.jpg')




    return <>
        <mesh
            geometry={props.nodes.LogoULMA.geometry}
            position={[3.736, 5.408, -0.575]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={arjitSinghTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoRCP.geometry}
            position={[3.701, 5.409, 0.309]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}        
        >
            <meshBasicMaterial map={seedheMautTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoPNL.geometry}
            position={[3.77, 5.102, -1.003]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={weekndTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoHamza.geometry}
            position={[3.736, 5.107, -0.156]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={talwinderTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoBooba.geometry}
            position={[3.686, 5.077, 0.811]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
            <meshBasicMaterial map={kishorKumarTexture} map-flipY={false} />

        </mesh>
    </>
}