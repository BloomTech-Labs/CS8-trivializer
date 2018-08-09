import React from "react";

import { SignUpWrapper } from '../primitives/Landing';
import { ModalWrapper } from './primitives/Modal';


const Modal = ({ handleClose, show, children}) => {
    console.log("HANDLE CLOSE", handleClose);
    console.log("SHOW", show);
    const showHideClassname = show ? "modal display-block" : "display-none";
    console.log("SHOW HIDE CLASSNAME", showHideClassname);
    return (
        
        <ModalWrapper onClick={handleClose} className={showHideClassname}> 
                {children}
            </ModalWrapper>
       
    );
};

export default Modal;