// The tasks are added when the user presses enter on the keyboard, or you can have your own button.
// The delete icon shows only when the task is hovered.
// The user can add as many tasks as they want.
// When there are no tasks the list should say "No tasks, add a task"
// There is no way to update a task, the user will have to delete and create again.

import React, {useState} from "react";


//create your first component
const Home = () => {
	const [toDoList, setToDoList] = useState([]);
	const [task, setTask] = useState("");

	const addToList = (e) => {
        e.preventDefault();
		let toDo = {value: task, done: false}
        if (task.trim() !== "") {
            setToDoList([...toDoList, toDo]);
            setTask(""); 
        }
    };
	
	const removeToDo = (i) => {
		const newToDoList = toDoList.filter((toDo, index) => index !==i);
		setToDoList(newToDoList);
	}
	
	console.log(toDoList);
	
	
	return (
		<div className="text-center m-auto py-5">
            <input 
				type="text" 
				onChange={(e) => setTask(e.target.value)} 
				value={task}
			/>
			<button onClick={(e) => addToList(e, task)}>Add to List</button>

			{/* display toDoList */}
			<ul>
				{toDoList.length === 0 ? (
					<li>No tasks, add a task</li>
				) : (
					toDoList?.map((toDo, index) => {
						if(toDo.done != true) {
							return <li key={index}>{toDo.value} <span onClick={() => removeToDo(index)}>❌</span></li>
						}							
					})				
				)}
			</ul>	
		</div>
	);
};

export default Home;