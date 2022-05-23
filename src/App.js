import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";




const Box = styled.div `
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  whidth:100%;
  height: 100vh;
  
`
const Titulo = styled.h1`
  font-size: 3rem;
  color: white;
`
const Numero = styled.h2`
  font-size: 3rem;
  color:white;
`

const Botao = styled.button`
    background: white;
    border: 5px solid white;
    border-radius: 3px;
    margin: 1rem;
    font-size: 1rem;
    font-weight:bold;
    hight: 10vh;
    width: 4vw;
    cursor:pointer;
    &:hover{
    opacity:0.5;
    }
`
export default class app extends React.Component {
  state = {
    num: 0
  };


  
  start = () => {
    this.setState({
      num: this.state.num + 1
    });
    this.myInterval = setInterval(() => {
      this.setState({
        num: this.state.num + 1
      });
    }, 1000);
    document.body.style.backgroundColor = "green"
  };

  stop = () => {
    clearInterval(this.myInterval);
    document.body.style.backgroundColor = "red";
  };

  reset = () => {
    clearInterval(this.myInterval);
    this.setState({
      num: 0
    });
    document.body.style.backgroundColor = "#C8A2C8";
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#C8A2C8";
  }

  render() {
    return (
      
      <Box>
        
        <Titulo>Cronômetro</Titulo>
        <Numero>{this.state.num}</Numero>
        <div>
        <Botao onClick={this.start}>Start</Botao>
        <Botao onClick={this.stop}>Stop</Botao>
        <Botao onClick={this.reset}>Reset</Botao>
        </div>
        
      </Box>
    );
  }
}
