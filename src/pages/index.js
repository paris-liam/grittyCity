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
  grid-template-rows:auto auto auto auto;
  grid-template-columns: auto;
  font-family: "Open Sans";

    text-align:center;
    color:white;
  & > p{
    margin: 0 auto;
  }
  & > img{
    margin: 0 auto;
    width:60%;
  }
  & > #shirtImage{
    width:80%;
    padding-bottom:5vh;
  }
  & > form{
    background-color:black;
    color:white;
    width:100%;
    text-align:center;
    margin-top:2vh;
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
      closeup:false
    }
    this.toggleCloseup = this.toggleCloseup.bind(this);
  }
  toggleCloseup(){
    this.setState((prevState)=>({
      closeup:!prevState.closeup
    }))
    console.log(this.state);
  }
  render(){
    return(
      <Layout><GritGrid>
      <ImageRow style={{gridArea:'imageRow'}}>
         <img src={creamcheese}></img>
         <img src={pretzel}></img>
         <img src={creamcheese}></img>
      </ImageRow>
        <MainRow>
      <img src={HeaderImg}  />
      <img id='shirtImage' src={this.state.closeup ? (closeup):(shirt)} onClick={this.toggleCloseup}/>
      <p>Each shirt made to order. Please allow one week for shipping</p>
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="VYHW7DWSNDR74"/>
        <input type="hidden" name="shipping" value='0'/>
        <input type="hidden" name="on0" value="Sizes"/>Sizes<select name="os0">
          <option value="SMALL">SMALL </option>
          <option value="MEDIUM">MEDIUM </option>
          <option value="LARGE">LARGE </option>
          <option value="XL">XL </option>
        </select>
        <input style={{margin:'0 auto'}} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>
      </MainRow>
      <ImageRow style={{gridArea:'image2Row'}}>
         <img src={pretzel}></img>
         <img src={creamcheese}></img>
         <img src={pretzel}></img>
      </ImageRow>
      </GritGrid></Layout>
    )
  }
}

export default IndexPage
