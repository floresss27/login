import styled from "styled-components";

export const Main = styled.div`
    width: 700px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 400px;
    border-radius: 10px;
    border-color: #ffff;
    border-style: solid;
    border-width: 1px;
`

export const TextField = styled.div`
    margin: 10px;
    display: flex;
    input{
        margin-left: 10px;
        width: 300px;
        height: 25px;
        border-radius: 5px;
        display: inline-block;
        padding-left: 10px;
    }
    span{
        font-size: 25px;
        display: block;
        padding-left: 10px;
        text-align: right;
    }
`