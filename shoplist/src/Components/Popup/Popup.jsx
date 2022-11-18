import React from 'react';


function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='inside'>
                <input type="text" placeholder='Digite aqui o nome de sua nova lista'></input>
                <button type="submit">CRIAR</button>
                { props.children }
            </div>
        </div>
    ): "";
}

export default Popup