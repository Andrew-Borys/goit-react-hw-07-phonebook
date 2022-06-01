import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  height: 250px;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(56, 56, 56);
    border-radius: 16px;
    border: 4px solid #fff;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(117, 111, 111);
  }
`;
