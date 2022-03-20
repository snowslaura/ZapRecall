export default function Almost(props){
    const {setEmojis, emojis, setResult, setStage} = props

    function handleClick(){
        setEmojis([...emojis,2])
        setResult("almost-correct")
        setStage(1)
    }

    return( 
    <div className="almost" onClick={handleClick}>
        <p>Quase não lembrei</p>
    </div>
    )
}