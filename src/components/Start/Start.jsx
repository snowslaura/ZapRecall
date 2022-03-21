import { useState } from "react"

export default function Start(props){

    const [hide,setHide] = useState(false)
     
    const {questions, setQuestions} = props

    function handleClick(){

        function compare() { 
            return Math.random() - 0.5; 
        }

        function shuffleCards(array){    
            return array.sort(compare); 
        }   

        const shuffle = shuffleCards(questions);
                
        setQuestions(shuffle)
        setHide(true)
    }

return(
    <div className={hide?"hide":""}>
        <div className="start-page">
            <img className="FrontPageLogo" src="./assets/frontPageLogo.png" alt="logo-ZapRecall"/>
            <h1 className="FrontPageName">ZapRecall</h1>
            <button className="StartButton" onClick={handleClick}>Iniciar Recall!</button>
        </div>
    </div>
)
}



