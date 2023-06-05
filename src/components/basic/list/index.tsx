import React from "react";
import { ListContainer, StyledListItem } from "./style";

type ListPropsType = {
    children: any
}

type ListItemPropsType = {
    children: any
}

const List: React.FC<ListPropsType> = ({
    children
}) => {
    return (
        <ListContainer>
            {children}
        </ListContainer>
    )
}

export const ListItem: React.FC<ListItemPropsType> = ({
    children
}) => {
    return (
        <StyledListItem>
            {children}
        </StyledListItem>
    )
}

export default List;
