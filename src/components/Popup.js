import { useState } from "react";
import Form from "./form/Form";
import Overlay from "./Overlay";
import { OverlayPane } from "./styles/OverlayPane.styled";


function Popup(props){
    const triggerFunc = () => {
        props.trigger = !props.trigger;
        console.log("clicked");
    }
    return (
            (props.trigger) ? (
                <>
                    <div onClicked={triggerFunc}>
                        <Form />  
                        <form></form>
                    </div>
                </>
                
                      
                ) : ""
    )
        
}

export default Popup;