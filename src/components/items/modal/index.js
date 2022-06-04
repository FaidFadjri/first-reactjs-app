import {React} from 'react';
import { Button, ButtonInvert, Gap, Input, InputFile, TextArea } from '../../atoms';
import './modal.scss';

function Modal({closeModal}){
    return (
        <div className='modal'>
            <div className='modal-container'>
                <button className='close-icon' onClick={() => closeModal(false)}>&times;</button>
                <div className="title">
                    <h1>Form Tambah Artikel</h1>
                </div>
                <div className="body">
                    <form>
                        <Input label="Judul Artikel" placeholder="Ketikan Judul Artikel" />
                        <Gap height={10}/>
                        <TextArea label="Deskripsi Artikel" placeholder="Ketikan Deskripsi Artikel" />
                        <Gap height={10}/>
                        <InputFile label="Upload Image" />
                        <Gap height={10}/>
                    </form>
                </div>
                <div className='footer'>
                    <ButtonInvert title="Cancel" onClick={() => closeModal(false)}/>
                    <Button title="Continue" />
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
      )
}


export default Modal
