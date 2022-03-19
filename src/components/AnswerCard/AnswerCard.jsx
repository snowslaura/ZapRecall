import NotRemember from "../NotRemember/NotRemember"
import Almost from "../Almost/Almost"
import Zap from "../Zap/Zap"
export default function AnswerCard(props){
    const {answer} = props

    return(
        <>
        <div className="">
            <div className='Card-stage2'>
                <p className='Question-stage2'>{answer}</p>
                <div className="score">
                    <NotRemember />
                    <Almost />
                    <Zap />
                </div>
            </div>
        </div>
        </>
        
    )  
}

