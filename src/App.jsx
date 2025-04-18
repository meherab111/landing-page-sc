import './App.css'
import styled from "styled-components"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/Global"

export const App = () => {


  // using theme provider

 const Theme = {
  color:{
    primaryCol: "orange",
  }
 }


  // Using variable
  // const primaryCol = "orange"

  // Making styled components for each tag.

  const Button = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  border: none;
  padding: 1.2rem 2.2rem;
  color: rgb(0, 66, 30);
  //use of props
  background-color: ${(props) => {return props.bg}};
  border-radius: 100rem ;
  -webkit-border-radius: 100rem ;
  -moz-border-radius: 100rem ;
  -ms-border-radius: 100rem ;
  -o-border-radius: 100rem ;

  &:hover{
  transform: translateY(-0.2rem)
  }

  span{
  color: red;
  }

  `
  const PTag = styled.p`
  // color: #ffffff;
  color: ${Theme.color.primaryCol};
  `

  // Making Wrapper component for whole tag

//   const Wrapper = styled.section`
//   .btn{
//   cursor: pointer;
//    font-size: 1.6rem;
//    border: none;
//    padding: 1.2rem 2.2rem;
//    color: rgb(0, 66, 30);
//    background-color: rgb(104, 243, 24);
//    border-radius: 100rem ;
//    -webkit-border-radius: 100rem ;
//    -moz-border-radius: 100rem ;
//    -ms-border-radius: 100rem ;
//    -o-border-radius: 100rem ;
//   }

//  .p-tag{
//  color: #ffffff;
//  }
//   `

  return (
    <ThemeProvider theme = {Theme}>
    <>
    <GlobalStyle />
    {/* Implementing styled components */}
    {/* <Wrapper>
    <button className='btn'>Hello !</button>
    <p className='p-tag'>Have A Nice Day !!!</p>
    </Wrapper> */}
    {/* using props */}
    <Button bg="coral">Hello ! <span>World</span></Button>
    <PTag>Have A Nice Day !!!</PTag>
    </>
    </ThemeProvider>
  )
}
