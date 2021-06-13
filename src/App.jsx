import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FourOhFour from './pages/404';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Register from './pages/Register';
import Login from './pages/Login';
import UserTodo from './pages/UserTodo';
import AddTodo from './pages/AddTodo';

// import from components
import Navbar from './components/navbar';
import StateProvider from './components/stateprovider';

const App = () => {
	return (
		<StateProvider>
			<Router>
				<Navbar />

				<Switch>
					{/* render Register Component when we hit /register */}
					<Route exact path='/register'>
						<Register />
					</Route>

					{/* render Login Component when we hit /login */}
					<Route exact path='/login'>
						<Login />
					</Route>

					{/* render Home Component when we hit /home */}
					<Route exact path='/home'>
						<Home />
					</Route>
					{/* render Post Component when we hit /post */}
					<Route exact path='/todo'>
						<Todo />
					</Route>
					{/* render Post Component when we hit /post */}
					<Route exact path='/addtodo'>
						<AddTodo />
					</Route>
					{/* render UserPost Component when we hit /userpost */}
					<Route exact path='/usertodo/:userid'>
						<UserTodo />
					</Route>

					{/* render Home Component when we hit / */}
					<Route exact path='/'>
						<Home />
					</Route>

					{/* fallback to a 404 if a route is not matched */}
					<Route>
						<FourOhFour />
					</Route>
				</Switch>
			</Router>
		</StateProvider>
	);
};

export default App;




































































































// import React, { useState, useRef, useEffect } from "react";
// import Form from "./components/Form";
// import FilterButton from "./components/FilterButton";
// import Todo from "./components/Todo";
// import { nanoid } from "nanoid";


// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

// const FILTER_MAP = {
//   All: () => true,
//   Active: task => !task.completed,
//   Completed: task => task.completed
// };

// const FILTER_NAMES = Object.keys(FILTER_MAP);

// function App(props) {
//   const [tasks, setTasks] = useState(props.tasks);
//   const [filter, setFilter] = useState('All');

//   function toggleTaskCompleted(id) {
//     const updatedTasks = tasks.map(task => {
//       // if this task has the same ID as the edited task
//       if (id === task.id) {
//         // use object spread to make a new obkect
//         // whose `completed` prop has been inverted
//         return {...task, completed: !task.completed}
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   }


//   function deleteTask(id) {
//     const remainingTasks = tasks.filter(task => id !== task.id);
//     setTasks(remainingTasks);
//   }


//   function editTask(id, newName) {
//     const editedTaskList = tasks.map(task => {
//     // if this task has the same ID as the edited task
//       if (id === task.id) {
//         //
//         return {...task, name: newName}
//       }
//       return task;
//     });
//     setTasks(editedTaskList);
//   }

//   const taskList = tasks
//   .filter(FILTER_MAP[filter])
//   .map(task => (
//     <Todo
//       id={task.id}
//       name={task.name}
//       completed={task.completed}
//       key={task.id}
//       toggleTaskCompleted={toggleTaskCompleted}
//       deleteTask={deleteTask}
//       editTask={editTask}
//     />
//   ));

//   const filterList = FILTER_NAMES.map(name => (
//     <FilterButton
//       key={name}
//       name={name}
//       isPressed={name === filter}
//       setFilter={setFilter}
//     />
//   ));

//   function addTask(name) {
//     const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
//     setTasks([...tasks, newTask]);
//   }


//   const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
//   const headingText = `${taskList.length} ${tasksNoun} remaining`;

//   const listHeadingRef = useRef(null);
//   const prevTaskLength = usePrevious(tasks.length);

//   useEffect(() => {
//     if (tasks.length - prevTaskLength === -1) {
//       listHeadingRef.current.focus();
//     }
//   }, [tasks.length, prevTaskLength]);

//   return (
//     <div className="todoapp stack-large">
//       <Form addTask={addTask} />
//       <div className="filters btn-group stack-exception">
//         {filterList}
//       </div>
//       <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
//         {headingText}
//       </h2>
//       <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading"
//       >
//         {taskList}
//       </ul>
//     </div>
//   );
// }

// export default App;
