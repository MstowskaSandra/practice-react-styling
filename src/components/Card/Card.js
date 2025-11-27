import React from "react";
import * as S from './Card.styled';

const Card = ({ children, style }) => {
    return <S.Card style={style}>{children}</S.Card>;
};

export default Card;