import { useState } from "react";



interface CubeProps{
    position?: [number, number, number];
    size?: [number, number];
}

export default function Cube({ position = [-4,-1.4,0], size = [1,4]}:CubeProps){

    const [active, setActive] = useState(false);



    return(
        <mesh position={position} pointerEventsType={{deny: "grab"}} onClick={() => setActive(!active)}>
            <boxGeometry args={size}/>
            <meshStandardMaterial color={active ? "red" : "green"}/>
        </mesh>
    )
}