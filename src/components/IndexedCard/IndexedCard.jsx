export default function IndexedCard(props){

    const {number, setStage} = props


    return(
        <>
        <div className="">
            <div className='Card-stage1'>
                <p className='Question-stage1'> Pergunta {number}</p>
                <ion-icon className="Arrow" name="play-outline" onClick={()=>setStage(2)}></ion-icon>
            </div>
        </div>
        </>
        
    )   
}

