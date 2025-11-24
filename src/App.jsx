import { Canvas } from "@react-three/fiber"
import { Environment, Gltf, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { createXRStore, XR } from "@react-three/xr"
import { Cube } from "./lib/cube";

const xrstore = createXRStore({

}); //for the VR experience

function App() {

  return (
    <>
      <Canvas 
        style={{width : "100vw", height:"100vh"}}
      >
        <color attach={"background"} args={[0x808080]} />
        <PerspectiveCamera makeDefault position={[0,1.6,2]} fov={75} />
        <Environment files="/river_alcove_4k.exr" background backgroundIntensity={0.2} /> 
        <Cube x="0" y="1" z="-5"/>
        <Cube x="0" y="1" z="5"/>
        <XR store={xrstore}/>
      </Canvas>

      <div
          style={{
            position: "fixed",
            display: "flex",
            width: "100vw",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <button
            style={{
              position: "fixed",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "20px",
            }}
            onClick={() => {
              xrstore.enterVR();
            }}
          >
            Enter VR
          </button>
        </div>

    </>
    
  )
}

export default App
