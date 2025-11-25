import React from "react";
import * as S from './Alert.styled';


const Alert = ({ variant = 'primary', children }) => {
    return (
        <S.Alert variant={variant}>
            {children}
        </S.Alert>        
    )
}

export default Alert;