
import Paddle from './Paddle'
import imageFile from '../assets/boat.png'
import '../style/boat.css'

export default function Boat({trigger,setTrigger})
{
    // const [move,setMove]=useState(0)
    return(
        <>
            <img className="boatstart" style={{marginTop: trigger*-10+"vh"}} src={imageFile} alt="Boat"></img>
            <br/>
            <Paddle trigger={trigger} setTrigger={setTrigger}/>
        </>
    )
}