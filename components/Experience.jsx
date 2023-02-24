{
  /* add OrbitControls from React Three Drei */
}
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "/components/WawaOffice";

export const Experience = () => {
  return (
    <>
      {/* OrbitControls are catching the scroll event, disable by enableZoom={false} */}
      <OrbitControls enableZoom={false} />
      <mesh>
        {/* BoxGeometry is a geometry class for a rectangular cuboid */}
        {/*<boxGeometry /> */}
        {/* Scroll controls create a HTML scroll container in front of the canvas */}
        <ScrollControls pages={3} damping={0.25}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        {/* Office Component 3D Model */}
        <Office />
        </ScrollControls>
        {/* ambientLight to avoid seeing the model in black */}
        <ambientLight intensity={.5}/>
        {/* A material that maps the normal vectors to RGB colors */}
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
