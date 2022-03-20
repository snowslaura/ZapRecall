export default function Footer(props){
    const {finished,  totalCards, emojis} = props;

        return (
        <>
        <div className='Footer'>
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
