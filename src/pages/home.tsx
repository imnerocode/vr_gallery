import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import Ground from "../components/Ground";
import "../styles/home.css";
import {createXRStore, XR } from "@react-three/xr";
import Cube from "../components/Cube";

export default function Home(){

    const store = createXRStore();
    return(
        <>
            <nav>
                <div id="container-menu">
                    <Link to={"/"}>NerosVR</Link>
                    <button onClick={() => store.enterAR()}>Enter AR</button>
                </div>
            </nav>
            <main id="container-canvas">
                <div id="canvas">
                    <Canvas>
                        <XR store={store}>
                            <directionalLight position={[0,10,-1]} color={"white"} intensity={6}/>
                            <ambientLight color={"white"} intensity={0.5}/>
                            <Ground size={[4,20]} color="darkred"/>
                            <Ground size={[20,20]} position={[0,-2.01,0]} color="white"/>
                            <Cube/>
                            <Cube position={[4,-1.4,0]}/>
                            <Cube position={[4,-1.4,-3]}/>
                            <Cube position={[-4,-1.4,-3]}/>
                        </XR>
                    </Canvas>
                </div>
            </main>
        </>
    )
}