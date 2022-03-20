export default function Zap(props){
    const {setEmojis, emojis, setResult, setStage} = props

    function handleClick(){
        setEmojis([...emojis,3])
        setResult("correct")
        setStage(1)
    }
    return(
        <div className="zap" onClick={handleClick}>
            <p>Zap!</p>
        </div>
    )
}