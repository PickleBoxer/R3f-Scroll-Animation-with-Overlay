import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "/src/components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [2.3, 1.5, 1.5],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
