export default function Zap(props){
    const {setEmojis, emojis} = props

    function endCard(){
        setEmojis([...emojis,3])
    }
    return(
        <div className="zap" onClick={endCard}>
            <p>Zap!</p>
        </div>
    )
}