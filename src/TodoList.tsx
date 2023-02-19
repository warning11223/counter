import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type TodoListProps = {
    title: string
    tasks: Array<TaskType>
    deleteItemHandler: (id: string) => void
    filteredTasks: (param: string) => void
    addNewTaskHandler: (value: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList: React.FC<TodoListProps> = ({title, tasks, deleteItemHandler, filteredTasks, addNewTaskHandler }) => {
    const [inputValue, setInputValue] = useState('')

    let tasksList = tasks.length
        ? tasks.map(item => {
            return  (
                <li key={item.id}>
                    <input type="checkbox" checked={item.isDone} readOnly/>
                    <span>{item.title} </span>
                    <button onClick={() => deleteItemHandler(item.id)}>X</button>
                </li>
            );
        })
        : <span>Your list is empty</span>;

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>)  => {
        setInputValue(e.currentTarget.value)
    }
    const addButtonHandler = () => {
        addNewTaskHandler(inputValue)
        setInputValue('')
    }
    const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addNewTaskHandler(inputValue)
            setInputValue('')
        }
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={inputValue} onChange={inputChangeHandler} onKeyPress={enterHandler}/>
                <button onClick={addButtonHandler}>+</button>
            </div>
            <ul>
                {/*<li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span></li>
                <li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>
                <li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>*/}
                {tasksList}
            </ul>
            <div>
                <button onClick={() => filteredTasks('all')}>All</button>
                <button onClick={() => filteredTasks(('active'))}>Active</button>
                <button onClick={() => filteredTasks('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;
