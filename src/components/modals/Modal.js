import React from "react";
import './Modal.scss';

const Modal = ({title, children, close}) => {
    return (
        <React.Fragment>
            <div className="overlay"></div>
            <section className="modal">
                <header className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button 
                        className="modal-button"
                        type="button" 
                        onClick={close}>
                        X
                    </button>
                </header>
                <article className="modal-content">
                    {children}
                </article>
            </section>
        </React.Fragment>
    )
};

export default Modal;
