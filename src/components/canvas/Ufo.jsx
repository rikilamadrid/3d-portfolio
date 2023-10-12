import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ufo = ({ isMobile }) => {
  const ufo = useGLTF("./cow/scene.gltf");
  // const { actions } = useAnimations(ufo.animations[0]);
  // console.log('lamadrid actions', actions);
  // console.log('lamadrid ufo', ufo);

  // useEffect(() => {
    // Play the animation loop when the component mounts
    // actions?.Experiment?.play();
  // }, [actions]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={ufo.scene}
        scale={isMobile ? [2, 2, 2] : [-20, -20, -20]}
        position={[1, -3.25, -1.5]}
        rotation={[-0.01, 2, -0.01]}
      />
    </mesh>
  );
};

const UfoCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ufo isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default UfoCanvas;
