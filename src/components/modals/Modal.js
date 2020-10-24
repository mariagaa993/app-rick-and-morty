import React, { Fragment } from "react";
import './Modal.scss';
import closeButton from '../../assets/close-button.svg';

const Modal = ({title, children, close}) => {
    return (
        <Fragment>
            <div className="overlay"></div>
            <section className="modal">
                <header className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button 
                        className="modal-button"
                        type="button" 
                        onClick={close}>
                        <img 
                            className="modal-button-img"
                            src={closeButton} 
                        />
                    </button>
                </header>
                <article className="modal-content">
                    {children}
                </article>
            </section>
        </Fragment>
    );
}

export default Modal;
