import { useEffect, useState } from "react" 

function MouseEvent(props){
    const {name} = props
    const [coordinates, setCoordinates] = useState({x: 0, y: 0})
    useEffect(() => {
        const handleMousemove = (e) => { 
            console.log(e)
            setCoordinates({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', handleMousemove)
    }, []);
    return(
        <div>
            {name}
        <p>Coord x : {coordinates.x}</p>
        <p>Coord y : {coordinates.y}</p>
        </div>
    )
}
export default MouseEvent