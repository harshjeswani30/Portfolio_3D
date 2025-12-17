import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import { DoubleSide, RepeatWrapping, Uniform } from "three";

import fragmentShader from '../../shaders/smoke/fragment.glsl'
import vertexShader from '../../shaders/smoke/vertex.glsl'

export default function ShaderSmoke() {

    const reactSteamRef = useRef()
    const nextjsSteamRef = useRef()
    const gsapSteamRef = useRef()

    const noiseTexture = useTexture("./Textures/noiseTexture.png")

    noiseTexture.wrapS = noiseTexture.wrapT = RepeatWrapping

    // Create separate material instances for each steam
    const createSmokeMaterial = () => ({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: new Uniform(0),
        uPerlinTexture: new Uniform(noiseTexture)
      }
    })

    const reactSmokeMaterial = useMemo(() => createSmokeMaterial(), [noiseTexture])
    const nextjsSmokeMaterial = useMemo(() => createSmokeMaterial(), [noiseTexture])
    const gsapSmokeMaterial = useMemo(() => createSmokeMaterial(), [noiseTexture])
  
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      if (reactSteamRef.current) reactSteamRef.current.material.uniforms.uTime.value = time;
      if (nextjsSteamRef.current) nextjsSteamRef.current.material.uniforms.uTime.value = time;
      if (gsapSteamRef.current) gsapSteamRef.current.material.uniforms.uTime.value = time;
    });

    
    return <>
        {/* React Mug Steam - positioned above React mug at [-0.4, 1, 0] */}
        <mesh position={[2.04, 2.76, 1]} ref={ reactSteamRef }>
            <planeGeometry args={[0.1, 0.25]} />
           
            <shaderMaterial 
                attach="material" 
                args={[reactSmokeMaterial]}  
                transparent
                depthWrite={false}
                side={DoubleSide}
            />
        </mesh>

        {/* Next.js Mug Steam - positioned above Next.js mug at [0.05, 1, 0.15] */}
        <mesh position={[2.47, 2.76, 1.1]} ref={ nextjsSteamRef }>
            <planeGeometry args={[0.1, 0.25]} />
           
            <shaderMaterial 
                attach="material" 
                args={[nextjsSmokeMaterial]}  
                transparent
                depthWrite={false}
                side={DoubleSide}
            />
        </mesh>

        {/* GSAP Mug Steam - positioned above GSAP mug at [-0.85, 1, 0.15] */}
        <mesh position={[1.5, 2.76, 1.3]} ref={ gsapSteamRef }>
            <planeGeometry args={[0.1, 0.25]} />
           
            <shaderMaterial 
                attach="material" 
                args={[gsapSmokeMaterial]}  
                transparent
                depthWrite={false}
                side={DoubleSide}
            />
        </mesh>
    
    </>

}