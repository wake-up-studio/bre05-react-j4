import {useState} from 'react';

const Note = (props)=>{
    const [content, setContent] = useState("");
    
    const handleChange = (event) =>{
        setContent(event.target.value);
    };
    
    return(
        <>
            <p>{content}</p>
            <form>
                <label htmlFor="message">
                    Message :
                </label>
                <input
                    name="message"
                    id="message"
                    type="text"
                    onChange={handleChange}
                />
                <button type="submit">Valider</button>
            </form>
        </>
    );
};

export default Note;