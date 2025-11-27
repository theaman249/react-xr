export default function Cube(props) {

    var X = props.x || 0;
    var Y = props.y || 0;
    var Z = props.z || 0;
    var _color = props.color || "blue";

    return (
        <mesh position={[X,Y,Z]}>
            <boxGeometry args={[0.5,0.5,0.5]} />
            <meshStandardMaterial color={_color} />
        </mesh>
    )
}