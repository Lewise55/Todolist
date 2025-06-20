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
			<div className="d-flex justify-content-center align-items-center flex-column">
			<h1>ToDo List</h1>
			<div className="d-flex mt-4 ">
				<input 
					type="text" 
					className="btn btn-light border-dark"
					onChange={(e) => setTask(e.target.value)} 
					value={task}
				/>
				<button 
					className="btn btn-dark" 
					onClick={(e) => addToList(e, task)}>
						Add to List
				</button>
			</div>

			{/* display toDoList */}
			
				<div className="card mt-4" style={{width: "18rem"}}>
					<div className="card-header">
						My List
					</div>
					<div className="card-body text-center">
						<ol className="list-group list-group-flush text-center">
							{toDoList.length === 0 ? (
								<li className="list-group-item">No tasks, add a task</li>
							) : (
								toDoList?.map((toDo, index) => {
									if(toDo.done != true) {
										return <li 
											className="list-group-item" 
											key={index}>{toDo.value} 
												<span 
													className="remover px-2" 
													onClick={() => removeToDo(index)}>
														❌
												</span>
										</li>
									}							
								})				
							)}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;