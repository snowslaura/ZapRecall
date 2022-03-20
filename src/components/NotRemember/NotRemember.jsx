export default function NotRemember(props){
    const {setEmojis, emojis, setResult, setStage} = props

    function endCard(){
        setEmojis([...emojis, 1])
        setResult("wrong-answer")
        setStage(1)
        
    }
    return(
    <div className="not-remember" onClick={endCard} >
        <p>Não lembrei</p>
    </div>
    )
}