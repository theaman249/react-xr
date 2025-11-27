import { Text } from "@react-three/drei";

function Button3D({ onClick }) {
    var X = 0;
    var Y = 1;
    var Z = -3;

    return (
        <mesh
            onPointerOver={(e) => (e.object.scale.set(1.1, 1.1, 1.1))}
            onPointerOut={(e) => (e.object.scale.set(1, 1, 1))}
            onClick={onClick} 
            position={[X,Y,Z]}// Call the onClick prop when clicked. This event is a function sent via props.
        >
            <boxGeometry args={[0.8, 0.5, 0.5]} />
            <meshStandardMaterial color="white" />


            <Text
                position={[0, 0, 0.31]}   // Slightly in front of the cube
                fontSize={0.15}
                color="black"
                anchorX="center"
                anchorY="middle"
            >
                Press Me
            </Text>
        </mesh>
    );
}

export default Button3D;
