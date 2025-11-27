import React from "react";
import * as S from './Breadcrumb.styled';

const Breadcrumb = ({ children }) => {
    return (
        <S.Nav aria-label="breadcrumb">
            <S.List>
                {children}
            </S.List>
        </S.Nav>
    );
};

export default Breadcrumb;