export default function IndexedCard(props){

    
    const {number} = props

    return(
        <>
        <div className="">
            <div className='Card-stage1'>
                <p className='Question-stage1'> Pergunta {number}</p>
                <ion-icon className="Arrow" name="play-outline"></ion-icon>
            </div>
        </div>
        </>
        
    )   
}

