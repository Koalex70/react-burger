import React, {FC, useState} from "react";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {TPasswordInput} from "../../services/types";

const PasswordInput: FC<TPasswordInput> = ({placeholder, value, onChange}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={isVisible ? 'text' : 'password'}
            icon={isVisible ? 'HideIcon' : 'ShowIcon'}
            onIconClick={() => setIsVisible(!isVisible)}
            extraClass="mb-6"
        />
    )
}

export default PasswordInput;