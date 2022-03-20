export default function Footer(props){
    const {finished,  totalCards, emojis} = props;

        return (
        <>
        <div className='Footer'>
            {emojis.length===totalCards && emojis.includes(1)?
            <div className="final-message">
                <p><img src="./assets/sad.png" alt="party"/><span>Putz... </span></p>
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
            </div>: 
            emojis.length===totalCards?
            <div className="final-message">
                <p><img src="./assets/party.png" alt="party"/><span>Parabéns! </span></p>
                <p>Você não esqueceu de</p><p> nenhum flashcard!</p>
            </div>:""}
            <p>{finished}/{totalCards} CONCLUÍDOS</p>
            <div>
                {emojis.map((emoji, index)=>{
                    return(
                    <img key={index} className="emoji" src={`./assets/emoji${emoji}.png`} alt={`emoji${emoji}`}/>
                    )
                })}
            </div>
        </div>
        
        </>
    )
    

    
}
