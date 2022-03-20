export default function NotRemember(props){
    const {setEmojis, emojis} = props

    function endCard(){
        setEmojis([...emojis, 1])
    }
    return(
    <div className="not-remember" onClick={endCard} >
        <p>Não lembrei</p>
    </div>
    )
}