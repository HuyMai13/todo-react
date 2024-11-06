import { useState } from "react";

export default function ToDo() {
    const [tasks, setTask] = useState(["Example task"]);
    const [newTask, setNewTask] = useState("");

    function handleInput(e) {
        setNewTask(e.target.value);
    }
    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTask((t) => [...t, newTask]);
            setNewTask("");
        }
    }
    function handleDel(index) {
        setTask(tasks.filter((_, i) => i !== index));
    }
    function moveUp(i) {
        if (i > 0) {
            [tasks[i - 1], tasks[i]] = [tasks[i], tasks[i - 1]];
            setTask([...tasks]);
        }
    }
    function moveDown(i) {
        if (i + 1 < tasks.length) {
            [tasks[i], tasks[i + 1]] = [tasks[i + 1], tasks[i]];
            setTask([...tasks]);
        }
    }

    return (
        <>
            <h1>To Do</h1>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInput}
            />
            <button className="add-button" onClick={handleAddTask}>
                Add
            </button>
            <ol>
                {tasks.map((element, id) => (
                    <li key={id}>
                        <span>{element}</span>
                        <button
                            className="del-button"
                            onClick={() => handleDel(id)}
                        >
                            Delete&nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                                />
                            </svg>
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveUp(id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="white"
                                    d="M12.53 8.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h13.06a.75.75 0 0 0 0-1.06z"
                                />
                            </svg>
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveDown(id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1rem"
                                height="1rem"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="white"
                                    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ol>
        </>
    );
}
