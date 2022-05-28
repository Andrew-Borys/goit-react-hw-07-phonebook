import styled from 'styled-components';

export const FormLabel = styled.label`
  display: block;
  text-align: start;
  color: #141010;
  font-weight: 600;
`;
export const FormInput = styled.input`
  display: block;
  width: 350px;
  height: 28px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 2px;
  background-color: rgb(68, 70, 85);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-align: center;
  display: inline-block;
  color: rgb(255, 255, 255);
  border: 0px;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
  width: 142px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:active {
    /* transform: scale(1.02); */
    background-color: rgb(103, 106, 124);
  }
`;
