import React from "react";
import * as S from './Card.styled';

const CardText = ({ children }) => {
    return <S.Text>{children}</S.Text>;
};

export default CardText;