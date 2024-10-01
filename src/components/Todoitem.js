import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todoitem = (props) => {
    let cardstyle={
        backgroundColor:"#8967B3",
        width: "30rem",
        color:"white"
        }
    return (
        <div className='container my-3'>
            <div className="card" style={cardstyle}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <FontAwesomeIcon onClick={props.handledelete}icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default Todoitem
