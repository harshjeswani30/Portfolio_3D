uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;

void main()
{
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv.y -= uTime * 0.03;

    // Smoke
    float smoke = texture(uPerlinTexture, smokeUv).r;

    // Remap - adjusted to make steam more visible/solid
    smoke = smoothstep(0.2, 1.0, smoke);

    // Edges - softer edges for more solid appearance
    smoke *= smoothstep(0.0, 0.15, vUv.x);
    smoke *= smoothstep(1.0, 0.85, vUv.x);
    smoke *= smoothstep(0.0, 0.15, vUv.y);
    smoke *= smoothstep(1.0, 0.3, vUv.y);

    // Increase opacity to make it more solid (inverse power to brighten)
    smoke = pow(smoke, 0.6);

    // Clamp and boost opacity for more visibility
    smoke = clamp(smoke * 1.5, 0.0, 1.0);

    // Final color
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}