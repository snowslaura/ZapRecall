export default function Almost(props){
    const {setEmojis, emojis} = props

    function endCard(){
        setEmojis([...emojis,2])
    }

    return( 
    <div className="almost" onClick={endCard}>
        <p>Quase não lembrei</p>
    </div>
    )
}