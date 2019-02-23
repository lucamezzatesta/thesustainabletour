import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {


    doCloseModal(e) {
        if (e.target.classList.contains('modal')) return true;
        return false;
    }

    render() {

        let {
                show,
                showClose = true,
                onClose = (e) => {},
                children
            } = this.props;

        return (
            show &&
            <div className="modal" onClick={e => this.doCloseModal(e) ? onClose(e) : null}>
                <div className="modal__wrapper">
                    {showClose &&
                        <button 
                            className="modal__close bg-green color-white"
                            onClick={onClose}
                        >X</button>
                    }
                    {children}
                </div>
            </div>
        )
    }
}
