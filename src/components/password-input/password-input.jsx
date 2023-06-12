import React, {useState} from "react";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const PasswordInput = ({placeholder, value, onChange}) => {
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

PasswordInput.propTypes = {
    placeholder: PropTypes.string.isRequired
}

export default PasswordInput;