import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    padding: 12px;
    border-radius: 4px;
    border-color: rgba( 0, 0, 0, 0.6);
    border: 3px solid #F08080;
    list-style: none;
`

export const Item = styled.li`
    background-color: #fff;
    border: 3px solid #F08080;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

`

export const Button = styled.button`
    padding:  4px 8px;
    font: inherit;
    cursor: pointer;
    border-radius:  4px 8px;
   border: 3px solid #F08080;
`