import NotRemember from "../NotRemember/NotRemember"
import Almost from "../Almost/Almost"
import Zap from "../Zap/Zap"
export default function AnswerCard(props){
    const {answer, setEmojis,emojis, setResult} = props

    return(
        <>
        <div className="">
            <div className='Card-stage2'>
                <p className='Question-stage2'>{answer}</p>
                <div className="score">
                    <NotRemember setEmojis={setEmojis} emojis={emojis} />
                    <Almost setEmojis={setEmojis} emojis={emojis} />
                    <Zap setEmojis={setEmojis} emojis={emojis} />
                </div>
            </div>
        </div>
        </>
        
    )  
}

