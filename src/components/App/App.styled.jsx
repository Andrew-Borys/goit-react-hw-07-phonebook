import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 38px 0px;
  width: fit-content;
  margin: 20px auto;
  box-shadow: rgb(12 0 90 / 35%) 0px 5px 15px;
  border-radius: 5px;
`;

export const Section = styled.div`
  padding: 0px 50px 0px 50px;
  &:not(:last-child) {
    margin-bottom: 48px;
  }
`;
