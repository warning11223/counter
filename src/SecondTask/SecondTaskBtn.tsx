import React from 'react';

type PropsType = {
    children: React.ReactNode
    clickHandler?: () => void
    tasksLength?: number
}

const SecondTaskBtn: React.FC<PropsType> = ({children, clickHandler, tasksLength}) => {
    const onClickHandler = () => {
        if (clickHandler) {
            clickHandler()
        }
    }

    return (
        <button disabled={children === 'Send' && tasksLength! >= 5} onClick={onClickHandler}>{children}</button>
    );
};

export default SecondTaskBtn;
