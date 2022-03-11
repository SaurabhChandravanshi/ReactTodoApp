import { useState } from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (title === '' || desc === '') {
            alert("Title & Description should not be empty.");
        } else {
            props.onAdd(title, desc);
            setTitle(""); setDesc("");
        }
    }
    return (
        <div className="container my-5">
            <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">TODO Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="titleInput" placeholder="What do you want to do?" />
            </div>
            <div className="mb-3">
                <label htmlFor="descInput" className="form-label">TODO Description</label>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe here"></textarea>
            </div>
            <button type="button" className="btn btn-success" onClick={submit}>Add to my TODO List</button>
        </div>
    );
}
