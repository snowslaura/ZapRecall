import { useState } from "react"

export default function Start(){

    const [hide,setHide] = useState(false)
     

return(
    <div className={hide?"hide":"lalala"}>
        <div className="start-page">
            <img className="FrontPageLogo" src="./assets/logo.png" alt="logo-ZapRecall"/>
            <h1 className="FrontPageName">ZapRecall</h1>
            <button className="StartButton" onClick={()=> setHide(true)}>Iniciar Recall!</button>
        </div>
    </div>
)
}



