import React from "react";
import * as S from './Card.styled';

const CardTitle = ({ children }) => {
    return <S.Title>{children}</S.Title>;
};

export default CardTitle;