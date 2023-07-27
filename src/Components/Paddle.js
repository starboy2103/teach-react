
export default function Paddle({trigger,setTrigger})
{
    function handleClick()
    {
        setTrigger(trigger+1);
    }
    return(
        <div className="paddle">
            <button onClick={handleClick}>{trigger}</button>
        </div>
    )
}