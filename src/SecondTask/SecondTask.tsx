import React, {useState} from 'react';
import SecondTaskInput from './SecondTaskInput';
import SecondTaskBtn from './SecondTaskBtn';

import s from './SecondTask.module.css'

export type TaskType = {
    id: number
    task: string
}

const SecondTask = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [value, setValue] = useState('')
    const [taskCounter, setTaskCounter] = useState(5)

    const addTask = () => {
        if (value.trim() !== '') {
            setTasks([...tasks, {id: tasks.length + 1, task: value}])
            setValue('')
            setTaskCounter(counter => counter - 1)
        }
    }
    const clearInput = () => {
        setValue('')
    }
    const deleteLastTask = () => {
        if (taskCounter === 5) return
        tasks.splice(-1)
        setTasks([...tasks])
        setTaskCounter(counter => counter + 1)
    }


    return (
        <div className={s.container}>
            {tasks.length >= 5 ? '' : <span>You can add {taskCounter} tasks</span>}
            {tasks.length === 5 && <span className={s.red}>Limit of messages is exceeded</span>}
            <div>
                <SecondTaskInput value={value} setValue={setValue} />
                <SecondTaskBtn tasksLength={tasks.length} clickHandler={addTask}>Send</SecondTaskBtn>
                <SecondTaskBtn clickHandler={clearInput}>Clear</SecondTaskBtn>
                <div className={s.lastMessageContainer}>
                    <SecondTaskBtn clickHandler={deleteLastTask}>Delete last message</SecondTaskBtn>
                </div>
                <ul>
                    {tasks.map(item => {
                        return <li key={item.id}><span>{item.task}</span></li>
                    })}
                </ul>
            </div>
        </div>

    );
};

export default SecondTask;
