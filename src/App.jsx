import { Canvas } from "@react-three/fiber"
import { Environment, Gltf, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { createXRStore, XR } from "@react-three/xr"
import Scene from "./lib/scene";

const xrstore = createXRStore({

}); //for the VR experience

function App() {

  return (
    <>
      <Canvas 
        style={{width : "100vw", height:"100vh"}}
      >
        <Scene/>
        <XR store={xrstore} />
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
