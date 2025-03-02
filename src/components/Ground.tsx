import * as THREE from "three";


interface GroundProps{
    size?: [number, number];
    position?: [number, number, number];
    rotation?: [number, number, number];
    color?: string;
}

export default function Ground({
    size = [8,8],
    position = [0,-2,0],
    rotation = [-Math.PI / 2, 0, 0],
    color = "white",
}: GroundProps){
    return(
            <mesh position={position} rotation={rotation}>
                <planeGeometry args={size}/>
                <meshStandardMaterial color={color} side={THREE.DoubleSide}/>
            </mesh>
    )
}