export function Cube(props) {

    var X = props.x || 0;
    var Y = props.y || 0;
    var Z = props.z || 0;

    return (
        <mesh position={[X,Y,Z]}>
            <boxGeometry args={[0.5,0.5,0.5]} />
            <meshStandardMaterial color={"orange"} />
        </mesh>
    )
}