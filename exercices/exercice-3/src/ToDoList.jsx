import {useState} from 'react';

const ToDoList = (props)=>{
    const [toDos, setToDo] = useState([]);
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        let newTab = toDos.concat([event.target.task.value]);
        setToDo(newTab);
        task.value="";
        console.log(toDos)
    }
    
    return(
        <>
            <ul>
                {toDos.map((toDo, i)=><li key={i}>{toDo}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">
                    Tâche :
                </label>
                <input
                    type="text"
                    id="task"
                    name="task"
                />
                <button type="submit">Ajouter</button>
            </form>
        </>
    );
    
};

export default ToDoList;