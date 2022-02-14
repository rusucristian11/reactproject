import axios from "axios";
import Header from "./Header";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import {useEffect, useState} from "react";


const ToDoApp = () => {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = () => {
            fetchTasks().then(response => {
                    setTasks(response)
                }
            )

        }
        getTasks()
    }, [])

    const fetchTasks = () => {
        return axios.get(`http://localhost:5000/tasks/`)
            .then(response => {
                return response.data;
            });
    }

    const fetchTask = async (id) => {
        return axios.get(`http://localhost:5000/tasks/${ id }`)
            .then(response => response.data);
    }

    const addTask = (task) => {
        axios.post('http://localhost:5000/tasks', task)
            .then(response => {
                return response.data
            }).then(res => {
            setTasks([...tasks, res])
        });
    }

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${ id }`)
            .then(() => setTasks(tasks.filter((task) => task.id !== id)))
            .catch(_ => {
                alert('Error Deleting This Task')
            });

    }

    const toggleReminder = (id) => {
        const taskToToggle = fetchTask(id).then(response => {
            return {...response, reminder: !response.reminder}
        })
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(taskToToggle),
        };
        return axios.put(`http://localhost:5000/tasks/${ id }`, requestOptions)
            .then(response => {
                setTasks(
                    tasks.map((task) =>
                        task.id === id ? {...task, reminder: response.data.reminder} : task
                    )
                )
                return response.data
            });
    }
    return (
            <div className='container'>
                <>
                    { showAddTask && <AddTask onAdd={ addTask }/> }
                    <Header
                        onAdd={ () => setShowAddTask(!showAddTask) }
                        showAdd={ showAddTask }
                    />
                    { tasks.length > 0 ? (
                        <Tasks
                            tasks={ tasks }
                            onDelete={ deleteTask }
                            onToggle={ toggleReminder }
                        />
                    ) : (
                        'No Tasks To Show'
                    ) }
                </>
            </div>
    )
}

export default ToDoApp;
