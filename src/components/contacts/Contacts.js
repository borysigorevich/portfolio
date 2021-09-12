import React, {useState} from 'react';
import './contacts.css'

const Contacts = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div className={'contact'} id={'contact'}>
            <div className="left">
                <img src="assets/shake.svg" alt="svg"/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={'Email'}/>
                    <textarea placeholder={'Message'}/>
                    <button type={'submit'}>Send</button>
                    {message && <span>Thanks for your message, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
};

export default Contacts;