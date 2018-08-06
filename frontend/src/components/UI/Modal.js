import React from "react";

import { SignUpWrapper } from '../primitives/Landing';
import { ModalWrapper } from './primitives/Modal';


const Modal = ({ handleClose, show, children}) => {
    const showHideClassname = show ? "modal display-block" : "modal display-none";

    return (
       
<ModalWrapper onClick={handleClose} className={[showHideClassname, "slide-in-top"].join(' ')}> 
                {children}
            </ModalWrapper>
       
    );
};

export default Modal;