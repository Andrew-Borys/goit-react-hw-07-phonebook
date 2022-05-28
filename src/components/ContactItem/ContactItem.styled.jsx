import styled from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  color: black;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DeleteButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
