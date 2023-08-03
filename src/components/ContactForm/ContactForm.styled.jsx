import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 12px;
    border-color: rgba(0,0,0,0.6);
       border: 3px solid #F08080;
       border-radius: 4px;
` 

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    color: #F08080;
    font-size: 20px;
`

export const Input = styled.input`
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
`

export const Button = styled.button`
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
     border: 3px solid #F08080;
     color:  #F08080;
     font-size: 20px; 
`