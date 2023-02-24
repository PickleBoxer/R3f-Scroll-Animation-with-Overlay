{
  /* add OrbitControls from React Three Drei */
}
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        {/* BoxGeometry is a geometry class for a rectangular cuboid */}
        <boxGeometry />
        {/* A material that maps the normal vectors to RGB colors */}
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
