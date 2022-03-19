export default function QuestionCard(props){

    const {question} = props

    return(
        <>
        <div className="">
            <div className='Card-stage2'>
                <p className='Question-stage2'>{question}</p>
                <img className="Arrow-stage2"src="./assets/setinha.png" alt="setinha"/>
            </div>
        </div>
        </>
        
    )   
}