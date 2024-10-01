import React, { useState } from 'react'

const Addtodo = ({onaddtodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [todos, setTodos] = useState([]);
    let formstyle = {
        backgroundColor: "#16423C",
        width: "60%",
        border: "5px solid red",
        borderRadius: "10px",
        color:"white"
    }
    let inputstyle = {
        width: "95%",
        marginLeft: "18px",
        
    }
    const handlesubmit=(event)=>{
        event.preventDefault(); // Prevent page refresh
        if (title && desc) {
            const newTodo = { title, desc };
            setTodos([...todos, newTodo]); 
            onaddtodo(newTodo);// Add new todo to the list
            settitle(""); // Reset title
            setdesc(""); //
        }
    }
    return (
        <div className='container'>
            <h2>Add todo</h2>
            <form style={formstyle} onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label style={{ marginLeft: "18px"}}htmlFor="title" className="form-label"><b>Title</b></label>
                    <input style={inputstyle}type="text" className="form-control" id="title" value={title}onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label style={{ marginLeft: "18px"}} htmlFor="desc" className="form-label"><b>Description</b></label>
                    <input style={inputstyle}type="text" className="form-control" id="desc" value={desc}onChange={(e)=>{setdesc(e.target.value)}}/>
                </div>
                <button style={{ marginLeft: "18px"}}type="submit" className="btn btn-sm btn-warning">Submit</button>
            </form>
            <h2>Your TodoList</h2>
        </div>
    )
}

export default Addtodo
