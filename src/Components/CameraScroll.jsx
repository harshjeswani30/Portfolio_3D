import { useLayoutEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, useTexture, Text } from '@react-three/drei'
import { FrontSide, ShaderMaterial } from 'three'

import gsap from 'gsap'

import TvScreen from './House/TvScreen.jsx'

export default function CameraScroll(props) {

    const DoorTexture = useTexture('./Textures/DoorBaked.jpg')
    
    // Create solid green material for "Harsh House" text
    const gradientMaterial = useRef(new ShaderMaterial({
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            void main() {
                // Solid green color
                vec3 greenColor = vec3(0.2, 0.8, 0.4);
                gl_FragColor = vec4(greenColor, 1.0);
            }
        `
    }))

    const camera = useThree((state) => state.camera);
    
    const doorRef = useRef()
    const tlRef = useRef()

    const reactTextRef = useRef()
    const nextjsTextRef = useRef()
    const gsapTextRef = useRef()
    const symfonyTextRef = useRef()
    const threejsTextRef = useRef()
    const blenderTextRef = useRef()

    const javaTextRef = useRef()
    const htmlTextRef = useRef()
    const cssTextRef = useRef()
    const javascriptTextRef = useRef()

    const threejsCertificationTextRef1 = useRef()
    const threejsCertificationTextRef2 = useRef()

    const dut1TextRef = useRef()
    const dut2TextRef = useRef()
    const dut3TextRef = useRef()

    const licence1TextRef = useRef()
    const licence2TextRef = useRef()
    const licence3TextRef = useRef()

    const master1TextRef = useRef()
    const master2TextRef = useRef()
    const master3TextRef = useRef()

    const tabShader1TextRef = useRef()
    const tabShader2TextRef = useRef()


    const particlesShaderTextRef = useRef()

    const vinyls1TextRef = useRef()
    const vinyls2TextRef = useRef()
    
    const sport1TextRef = useRef()
    const sport2TextRef = useRef()

    const seeyouTextRef = useRef()
    const harshHouseTextRef = useRef()

    const [progress, setProgress] = useState(1)
    const [opacity, setOpacity] = useState(0)
 
    const scroll = useScroll()

    useFrame((state, delta) => {
        tlRef.current.seek(scroll.offset * tlRef.current.duration())
    })

    useLayoutEffect(() => {
        tlRef.current = gsap.timeline()

        // GO TO DOOR
        tlRef.current.to(
            camera.position,
            {
                
                duration: 2,
                x: 7.7,
                y: 3,
                z: -2.5,     
     
            },           
        ) 
        tlRef.current.to(
            camera.rotation,
            {               
                x: 0, 
                y: Math.PI/2,     
                z:0,        
            
            }, "<60%"           
        ) 
        //OPEN DOOR
        tlRef.current.to(
            doorRef.current.rotation,
            {
                duration: 2,
                y: -Math.PI/2,
                         
            },           
        )      

        //FO THROUGH THE DOOR
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 3.4
            }
        )

        //GO TO REACT MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 1.9,
                y: 2.6,
                z: 0.3,
            },
        )
         tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI,  
                z: 0,         
            
            }, "<"          
        ) 
        tlRef.current.to(
            reactTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )

        //GO TO NEXT.JS MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 2.35,
                y: 2.6,
                z: 0.4,
            },
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI,  
                z: 0,         
            
            }, "<"          
        ) 
        tlRef.current.to(
            nextjsTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )

        //GO TO GSAP MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 1.45,
                y: 2.6,
                z: 0.4,
            },
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI,  
                z: 0,         
            
            }, "<"          
        ) 
        tlRef.current.to(
            gsapTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )
       
       

        // GO TO SYMFONY/THREEJS MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 3.3,
                y: 3.6,
                z: 2.3,
            }
        )
        tlRef.current.to(
            symfonyTextRef.current.material,
            {
                opacity: 1,
            }, "<40%"            
        )
        tlRef.current.to(
            threejsTextRef.current.material,
            {
                opacity: 1,
            }, "<"            
        )

        //GO TO BLENDER MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 1.8,
                y: 2.75,
                z: 2.4,
            }
        )
        
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI/4,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            blenderTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )

        //GO IN BATHROOM
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0,
                y: 3,
                z: 1.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO JAVA SOAP
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -1.38,
                y: 3,
                z: 0.8,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/6,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            javaTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )
        //GO TO HTML SOAP
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.3,
                y: 2.5,
                z: 1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/4,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            htmlTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )

        //GO TO CSS SOAP
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3,
                y: 2.5,
                z: 2.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            cssTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )

        //GO TO JS SOAP
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -2.4,
                y: 2.5,
                z: 3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 5*Math.PI/6,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            javascriptTextRef.current.material,
            {
                opacity: 1,
            },"<40%"
        )

        //EXIT BATHROOM
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -1.8,
                y: 3,
                z: 1.1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.5,
                y: 3,
                z: 1.1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI*2,  
                z: 0,           
            
            }, "<"          
        ) 


        //GO TO THEEJS JOURNEY CERTIFICATION 
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.3,
                y: 2.9,
                z: -1.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: (5*Math.PI)/2,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            threejsCertificationTextRef1.current.material,
            {
                opacity: 1,
            },"<40%"     
        ) 
        tlRef.current.to(
            threejsCertificationTextRef2.current.material,
            {
                opacity: 1,
            },"<%"     
        ) 
        

        // GO TO THE STAIR
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.3,
                y: 2.9,
                z: -3.2,
            }
        ) 

        //GO TO TROPHEES : first text
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -0.6,
                y: 3.2,
                z: -3.2,
            }
        )
        tlRef.current.to(
            dut1TextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        )
        tlRef.current.to(
            dut2TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )
        tlRef.current.to(
            dut3TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )  

         //GO TO TROPHEES : second text
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -1.7,
                y: 3.5,
                z: -3.2,
            }
        )
        tlRef.current.to(
            licence1TextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        )
        tlRef.current.to(
            licence2TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )
        tlRef.current.to(
            licence3TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )  


        //GO TO TROPHEES : third text
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -2.9,
                y: 3.9,
                z: -3.2,                
            }
        )
        tlRef.current.to(
            master1TextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        )
        tlRef.current.to(
            master2TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )
        tlRef.current.to(
            master3TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )  


        //GO NEXT FLOOR
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.3,
                y: 5.2,
                z: -1.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO THE BEDROOM
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.3,
                y: 5.2,
                z: 0,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: (7*Math.PI)/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO SHADER PAINT

        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0,
                y: 5.2,
                z: -1.4,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 4*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            tabShader1TextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        )  
        tlRef.current.to(
            tabShader2TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        )  

        //GO TO SHADER CLOUD
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 2.5,
                y: 4.7,
                z: -1.4,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 7*Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            particlesShaderTextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        ) 

        //GO TO VINYL
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 2.5,
                y: 5.2,
                z: 0,
            }
        )
        tlRef.current.to(
            vinyls1TextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        ) 
        tlRef.current.to(
            vinyls2TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        ) 

        //GO TO BOXING BAG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.3,
                y: 5.2,
                z: -1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 19*Math.PI/6,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            sport1TextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        ) 
        tlRef.current.to(
            sport2TextRef.current.material,
            {
                opacity: 1,
            },"<"     
        ) 

        //GO TO FOOTBALL BALL
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -0.7,
                y: 4.5,
                z: 0.2,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO THE STAIRS
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.2,
                y: 5.1,
                z: 0.2,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 2*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //DOWN THE STAIRS
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.2,
                y: 3.4,
                z: -3.2,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO TV
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.6,
                y: 2.4,
                z: -2.1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 2*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            seeyouTextRef.current.material,
            {
                opacity: 1,
            },"<40%"     
        ) 

        //ZOOM ON TV SCREEN
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.6,
                y: 2.35 ,
                z: -2.8,
            }
        )

        tlRef.current.to(
            { value: 1 },
            {
                duration: 2,
                value: 10,
                onUpdate: function () {
                    setProgress(this.targets()[0].value);
                },
            },
            "<" 
        )
        tlRef.current.to(
            { value: -1 },
            {
                value: 1,
                onUpdate: function () {
                    setOpacity(this.targets()[0].value);
                },
            },
            "<60%" 
        );
    }, [])

    return <>
        <group 
            ref={ doorRef } 
            position={[3.976, 1.618, -1.95]}
        >
            <mesh          
                geometry={props.nodes.DoorMerge.geometry}                  
            >
                <meshBasicMaterial map={DoorTexture} map-flipY={false} />
            </mesh>
        </group>  

        {/* Black rectangle overlay to cover original text on exterior wall */}
        {/* Exterior wall is at position [-0.006, 1.6, -4.011] with rotation [0, 1.571, 0] */}
        {/* Wall starts at y=1.6, text is typically in upper portion of wall texture */}
        {/* Positioned in front of wall (z=-2 is forward/closer to camera than wall at z=-4.011) */}
        <mesh
            position={[4.1, 5, 0.9]}
            rotation={[0.4, 1.571, 0]}
        >
            <planeGeometry args={[3.0, 1.4]} />
            <shaderMaterial
                transparent={false}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform vec2 size;
                    uniform float radius;
                    varying vec2 vUv;
                    
                    void main() {
                        vec2 pos = vUv * size;
                        vec2 center = size * 0.5;
                        vec2 dist = abs(pos - center);
                        vec2 corner = size * 0.5 - vec2(radius);
                        
                        float rounded = 1.0;
                        if (dist.x > corner.x && dist.y > corner.y) {
                            vec2 cornerDist = dist - corner;
                            float cornerRadius = length(cornerDist);
                            if (cornerRadius > radius) {
                                rounded = 0.0;
                            }
                        }
                        
                        gl_FragColor = vec4(0.0, 0.0, 0.0, rounded);
                    }
                `}
                uniforms={{
                    size: { value: [3.0, 1.4] },
                    radius: { value: 0.2 }
                }}
            />
        </mesh>

        {/* "HARSH HOUSE" text with gradient style, positioned in front of the black rectangle overlay */}
        {/* Overlay is 3.0 x 1.4 units, text should cover the full area (left, right, top, bottom) */}
        <Text
            ref={harshHouseTextRef}
            font="./fonts/Audiowide-Regular.ttf"
            position={[4.2, 5, 0.95]}
            rotation={[0.4, 1.571, 0]}
            fontSize={0.55}
            material={gradientMaterial.current}
            maxWidth={2.9}
            letterSpacing={0.08}
        >
            HARSH{'\n'}HOUSE
        </Text>

        <TvScreen progress={progress} opacity={opacity}/>      

        <Text
            ref={reactTextRef}
            font="./fonts/Bangers.ttf"
            position={[1.8, 2.7, 1]}
            fontSize={0.1}
            rotation-y={Math.PI}
            color="#2d1d04"
            material-opacity={0}
        >
            REACT
        </Text>

        <Text
            ref={nextjsTextRef}
            font="./fonts/Bangers.ttf"
            position={[2.25, 2.7, 1.1]}
            fontSize={0.1}
            rotation-y={Math.PI}
            color="#2d1d04"
            material-opacity={0}
        >
            NEXTJS
        </Text>

        <Text
            ref={gsapTextRef}
            font="./fonts/Bangers.ttf"
            position={[1.35, 2.7, 1.1]}
            fontSize={0.1}
            rotation-y={Math.PI}
            color="#2d1d04"
            material-opacity={0}
        >
            GSAP
        </Text>

        <Text
            ref={threejsTextRef}
            font="./fonts/Bangers.ttf"
            position={[2.8, 3.3, 3.3]}
            fontSize={0.1}
            rotation-y={Math.PI}
            color="#2d1d04"
            material-opacity={0}
        >
            ThreeJS
        </Text>

        <Text
            ref={symfonyTextRef}
            font="./fonts/Bangers.ttf"
            position={[3.5, 3.85 , 3.3]}
            fontSize={0.1}
            rotation-y={Math.PI}
            color="#2d1d04"
            material-opacity={0}
        >
            Symfony
        </Text>

        <Text
            ref={blenderTextRef}
            font="./fonts/Bangers.ttf"
            position={[1.5, 2.85, 2.7]}
            fontSize={0.1}
            rotation-y={3*Math.PI/4}
            color="#2d1d04"
            material-opacity={0}
        >
            Blender
        </Text>

        <Text
            ref={javaTextRef}
            font="./fonts/Bangers.ttf"
            position={[-1.6, 3.1, 0.1]}
            fontSize={0.1}
            rotation-y={Math.PI/6}
            color="#2d1d04"
            material-opacity={0}
        >
            Java
        </Text>

        <Text
            ref={htmlTextRef}
            font="./fonts/Bangers.ttf"
            position={[-3.7, 2.5, 0.5]}
            fontSize={0.1}
            rotation-y={Math.PI/2}
            color="#2d1d04"
            material-opacity={0}
        >
            HTML
        </Text>

        <Text
            ref={cssTextRef}
            font="./fonts/Bangers.ttf"
            position={[-3.7, 2.6, 2.15]}
            fontSize={0.1}
            rotation-y={Math.PI/2}
            color="#2d1d04"
            material-opacity={0}
        >
            CSS
        </Text>

        <Text
            ref={javascriptTextRef}
            font="./fonts/Bangers.ttf"
            position={[-2.9, 2.5, 3.4]}
            fontSize={0.1}
            rotation-y={2*Math.PI/3}
            color="#2d1d04"
            material-opacity={0}
        >
            JavaScript
        </Text>

        <group >
            <Text
                ref={threejsCertificationTextRef1}
                font="./fonts/Bangers.ttf"
                position={[-0.5, 3.1, -1.4]}
                fontSize={0.1}
                rotation-y={Math.PI/2}
                color="#2d1d04"
                material-opacity={0}
            >
                THREEJS CERTIFICATION
            </Text>
            <Text
                ref={threejsCertificationTextRef2}
                font="./fonts/Bangers.ttf"
                position={[-0.5, 3.05, -1.7]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#2d1d04"
                material-opacity={0}
            >
                BY BRUNO SIMON
            </Text>
        </group>

         <group>
            <Text
                ref={dut1TextRef}
                font="./fonts/Bangers.ttf"
                position={[-1.3, 3.15, -2.9]}
                fontSize={0.07}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                maxWidth={0.5}
                material-side={FrontSide}
                material-opacity={0}
            >
            Class XII - Science
            </Text>
            <Text
                ref={dut2TextRef}
                font="./fonts/Bangers.ttf"
                position={[-1.3, 3, -2.71]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                material-side={FrontSide}
                material-opacity={0}
            >
                Percentage: 84%
            </Text>

             <Text
                ref={dut3TextRef}
                font="./fonts/Bangers.ttf"
                position={[-1.3, 3, -3]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                material-side={FrontSide}
                material-opacity={0}
            >
                Sir Padampat Singhania School, Kota (2022)
            </Text>
        </group>

        <group>
            <Text
                ref={licence1TextRef}
                font="./fonts/Bangers.ttf"
                position={[-2.4, 3.5, -3.5]}
                fontSize={0.07}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                maxWidth={0.5}
                material-side={FrontSide}
                material-opacity={0}
            >
            Class X
            </Text>
            <Text
                ref={licence2TextRef}
                font="./fonts/Bangers.ttf"
                position={[-2.4, 3.35, -3.3]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                material-side={FrontSide}
                material-opacity={0}
            >
                Percentage: 90%
            </Text>

             <Text
                ref={licence3TextRef}
                font="./fonts/Bangers.ttf"
                position={[-2.4, 3.35, -3.55]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                material-side={FrontSide}
                material-opacity={0}
            >
                Sir Padampat Singhania School, Kota (2022)
            </Text>
        </group>

        <group>
            <Text
                ref={master1TextRef}
                font="./fonts/Bangers.ttf"
                position={[-3.6, 4, -3.2]}
                fontSize={0.06}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                maxWidth={0.85}
                material-side={FrontSide}
                material-opacity={0}
            >
            B.E. Computer Science (In progress...)
            </Text>
            <Text
                ref={master2TextRef}
                font="./fonts/Bangers.ttf"
                position={[-3.6, 3.9, -2.85]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                material-side={FrontSide}
                material-opacity={0}
            >
                Current CGPA: 7.67
            </Text>

             <Text
                ref={master3TextRef}
                font="./fonts/Bangers.ttf"
                position={[-3.6, 3.9, -3.45]}
                fontSize={0.02}
                rotation-y={Math.PI/2}
                color="#f4eadb"
                material-side={FrontSide}
                material-opacity={0}
            >
                Chandigarh University (2022-2026)
            </Text>
        </group>

        <group>
            <Text
                ref={tabShader1TextRef}
                font="./fonts/Bangers.ttf"
                position={[-0.3, 5.4, -2.1]}
                fontSize={0.07}
                color="#f4eadb"
                maxWidth={1}
                material-opacity={0}
            >
                hypnotizing shader
             </Text>

             <Text
                ref={tabShader2TextRef}
                font="./fonts/Bangers.ttf"
                position={[0, 5.38, -2.1]}
                fontSize={0.02}
                color="#f4eadb"
                maxWidth={1}
                material-opacity={0}
            >
                ...using GLSL
             </Text>

        </group>

        <Text
            ref={particlesShaderTextRef}
            font="./fonts/Bangers.ttf"
            position={[3.3, 4.8, -1.8]}
            fontSize={0.07}
            rotation-y={3*Math.PI/2}
            color="#f4eadb"
            maxWidth={1}
            material-opacity={0}
        >
            Particles Morphing
        </Text>

        <group>       
            <Text
                ref={vinyls1TextRef}
                font="./fonts/Bangers.ttf"
                position={[3.3, 5.2, 0]}
                fontSize={0.07}
                rotation-y={3*Math.PI/2}
                color="#f4eadb"
                maxWidth={1}
                material-opacity={0}
            >
                i love music ...
            </Text>

            <Text
                ref={vinyls2TextRef}
                font="./fonts/Bangers.ttf"
                position={[3.3, 5.15, -0.]}
                fontSize={0.02}
                rotation-y={3*Math.PI/2}
                color="#f4eadb"
                maxWidth={1}
                material-opacity={0}
            >
                I have a pretty cool vinyls collection
            </Text>
        </group>

        <group>
            <Text
                ref={sport1TextRef}
                font="./fonts/Bangers.ttf"
                position={[0.2, 5, 0.7]}
                fontSize={0.07}
                rotation-y={7*Math.PI/6}
                color="#f4eadb"
                maxWidth={1}
                material-opacity={0}
            >
                I like sports
            </Text>
            <Text
                ref={sport2TextRef}
                font="./fonts/Bangers.ttf"
                position={[0.2, 4.95, 0.7]}
                fontSize={0.02}
                rotation-y={7*Math.PI/6}
                color="#f4eadb"
                maxWidth={1}
                material-opacity={0}                
            >
                I practice boxing
            </Text>
        </group>

        <Text
            ref={seeyouTextRef}
            font="./fonts/Bangers.ttf"
            position={[0, 2.7, -3.7]}
            fontSize={0.2}
            color="#f4eadb"
            maxWidth={1}
            material-opacity={0}                
        >
            Let's keep in touch !
        </Text>

    </>
    

}
