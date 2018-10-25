import React from 'react'
import Layout from '../components/layout';
import shirt from '../images/GrittyCity.png';
import closeup from '../images/closeup.jpg';
import styled from 'styled-components';
import pretzel from '../images/PRETZEL.gif';
import creamcheese from '../images/creamcheese.png';
import HeaderImg from '../images/headerIMG.png';
const GritGrid = styled.div`
  background-color:black;
  margin:0;
  display:grid;
  grid-template-rows:80vh;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-areas:'imageRow mainRow image2Row';
  & > *{
    margin: 0 auto
  }
  @media only screen and (max-width:700px){
    height:100%;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: 'mainRow';
   }
`

const ImageRow = styled.div`
  justify-items:center;
  align-items:center;
  grid-template-columns:auto;
  grid-template-rows: auto auto auto;
  grid-row-gap:5vh;
  display:grid;
  & > img{
    width:60%;
  }
  @media only screen and (max-width:700px){
    display:none !important;
  }
  @media only screen and (min-width:1200px){
      & > img{
        margin: 0 auto;
        width:40%;
      }
    }
  `
const MainRow = styled.div`
  grid-area:mainRow;
  display:grid;
  grid-template-rows:auto auto auto auto auto;
  grid-template-columns: auto;
  font-family: "Open Sans";

    text-align:center;
    color:white;
  & > p{
    margin: 1vh auto 1vh  auto;
    width:85%;
    line-height:1.25
  }
  & > p#first{
    font-size: 1.25em
  }
  & > p#second{
    font-size: .75em
  }
  & > p#third{
    font-size: .75em;
    margin-bottom:2vh;
  }
  & > img{
    margin: 0 auto;
    width:50%;
    @media only screen and (max-width:700px){
      width:35%;
    }
  }

  & > #shirtImage{
    width:70%;
  }
  & > a > button{
    text-transform:uppercase;
    margin:1vh auto 0 auto;
    text-align:center;
    width:35%;
    padding:0;
    border-radius:2vh;
    outline:white;
    border:1px solid white;
    background-color:black;
    color:white;
    @media only screen and (max-width:1100px) and (min-width:700px){
      width:60%;
      height:50%;
    }
  }
  & > form{
    background-color:black;
    color:white;
    width:100%;
    text-align:center;
    display:grid;
    grid-template-columns:auto;
    grid-template-rows:auto auto;
    grid-row-gap: 2vh;
    select{
      width:30%;
      margin: 0 auto;
    }
  }
  `

class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      closeup:false,
      quantity:1,
      pickup:false,
      value:'15.00',
    }
    this.toggleCloseup = this.toggleCloseup.bind(this);
    this.togglePickup = this.togglePickup.bind(this);
  }
  toggleCloseup(){
    this.setState((prevState)=>({
      closeup:!prevState.closeup
    }))
    console.log(this.state);
  }
  togglePickup(e){
    this.setState({
      pickup:e.target.checked
    })
  }
  render(){
    return(
      <Layout><GritGrid>
      <ImageRow style={{gridArea:'imageRow'}}>
         <img alt='creamcheese' src={creamcheese}></img>
         <img alt='pretzel' src={pretzel}></img>
         <img alt='creamcheese' src={creamcheese}></img>
      </ImageRow>
        <MainRow>

      <img alt='grittycity' src={HeaderImg}  />
      <img id='shirtImage' alt='shirt' src={this.state.closeup ? (closeup):(shirt)} onClick={this.toggleCloseup}/>
      <p id='first'>$15 Free Shipping</p>
      <p id='second'>Each shirt made to order.<br/>Please allow one week for shipping.</p>
      <a href='https://grittycityphl.bigcartel.com/'><button >Order Now</button></a>
      </MainRow>
      <ImageRow style={{gridArea:'image2Row'}}>
         <img alt='pretzel' src={pretzel}></img>
         <img alt='creamcheese' src={creamcheese}></img>
         <img alt='pretzel' src={pretzel}></img>
      </ImageRow>
      </GritGrid></Layout>
    )
  }
}

export default IndexPage
