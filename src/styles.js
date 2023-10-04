import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 280px;
  margin: auto;
`;

export const Content = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  padding: 20px;
  -webkit-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap:6px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Result = styled.div`
    background-color: #EF6C00;
    border-radius: 5px;
    width: 100%;
    position: relative;
    margin-bottom:10px;

    input{
        width: calc(100% - 60px);
        background-color:transparent;
        text-align: right;
        padding-right:15px;
    }
    
`;

export const ResultReset = styled.div`
  position: absolute;
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 30px;
    height: 30px;
    max-width: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #EF6C00;
    padding: 0;
    cursor: pointer;
  }
`;
