import React from "react";
import * as S from './Card.styled';

const CardImg = ({ variant= "top", src, alt = "", ...rest }) => {
    return <S.CardImg src={src} alt={alt} {...rest}></S.CardImg>;
};

export default CardImg;