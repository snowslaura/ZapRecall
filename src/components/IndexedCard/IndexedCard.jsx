export default function IndexedCard(props){

    const {number, setStage, finished, setFinished, result}= props

    function handleClick(){
        setStage(2)
        setFinished(finished+1)
    }

    return(
        <>
        <div className={result}>
            <div className='Card-stage1'>
                <p className='Question-stage1'> Pergunta {number}</p>
                {!result?<ion-icon className="Arrow" name="play-outline" onClick={handleClick}></ion-icon>:""}
                {result==="correct"?<img className="emoji" src="./assets/emoji3.png" alt="emoji3"/>:""}
                {result==="almost-correct"?<img className="emoji" src="./assets/emoji2.png" alt="emoji2"/>:""}
                {result==="wrong-answer"?<img className="emoji" src="./assets/emoji1.png" alt="emoji1"/>:""}
            </div>
        </div>
        </>
        
    )   
}

