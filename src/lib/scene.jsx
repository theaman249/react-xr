import { XR } from "@react-three/xr";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import Button3D from "./button-3d";
import Cube from "./cube";
import { useState } from "react";


export default function Scene() {

    const [cubes, setCubes] = useState([]);
  

    function handleEvent() {
        let arr_colors = ["red", "green", "blue", "yellow", "purple", "orange"];
        let randomColor = arr_colors[Math.floor(Math.random() * arr_colors.length)];

        // Random cube position
        const x = (Math.random() - 0.5) * 10; // range -5 to +5
        const y = Math.random() * 3 + 0.5;    // range 0.5 to 3.5
        const z = (Math.random() - 0.5) * 10;

        console.log(`Adding cube at (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}) with color ${randomColor}`);

        // Add new cube to state
        setCubes(prev => [
            ...prev,
            { id: crypto.randomUUID(), position: [x, y, z], color: randomColor }
        ]);
    }

    return (
        <>
        <color attach="background" args={[0x808080]} />
        <PerspectiveCamera makeDefault position={[0, 1.6, 2]} fov={75} />

        <Environment
            files="/river_alcove_4k.exr"
            background
            backgroundIntensity={0.2}
        />

        {cubes.map(cube => (
            <Cube key={cube.id} x={cube.position[0]} y={cube.position[1]} z={cube.position[2]} color={cube.color} />
        ))}

        {/* Pass separated function here */}
        <Button3D onClick={handleEvent} />
        </>
    );
}
