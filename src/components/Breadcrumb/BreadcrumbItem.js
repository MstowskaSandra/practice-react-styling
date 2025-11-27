import React from "react";
import * as S from './Breadcrumb.styled';

const BreadcrumbItem = ({ href, active, children }) => {
    if (active) {
        return <S.Item active aria-current="page">{children}</S.Item>
    } else if (href) {
        return (
            <S.Item as="li" active={false}>
                <a href={href}>{children}</a>
            </S.Item>
        );
    } else {
        return <S.Item>{children}</S.Item>;
    }
};

export default BreadcrumbItem;