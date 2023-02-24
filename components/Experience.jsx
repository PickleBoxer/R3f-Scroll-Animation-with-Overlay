{
  /* add OrbitControls from React Three Drei */
}
import { OrbitControls } from "@react-three/drei";
import { Office } from "/components/WawaOffice";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        {/* BoxGeometry is a geometry class for a rectangular cuboid */}
        {/*<boxGeometry /> */}
        {/* Office Component 3D Model */}
        <Office />
        {/* ambientLight to avoid seeing the model in black */}
        <ambientLight intensity={.5}/>
        {/* A material that maps the normal vectors to RGB colors */}
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
