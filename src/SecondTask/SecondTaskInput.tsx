import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    value: string
    setValue: (value: string) => void
}

const SecondTaskInput: React.FC<PropsType> = ({value, setValue}) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input type="text" value={value} onChange={onChangeHandler}/>
    );
};

export default SecondTaskInput;
