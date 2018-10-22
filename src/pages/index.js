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
  height:80%;
  grid-template-rows:1fr;
  grid-template-columns:1fr 3fr 1fr;
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
   @media only screen and (min-width:1300px){
    grid-template-columns:1fr 1fr 1fr;
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
  grid-template-rows:auto auto auto;
  grid-template-columns: auto;
  & > img{
    margin: 0 auto;
    width:70%;
  }
  & > #shirtImage{
    width:50%;
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
  componentDidMount(){
    if(window.innerWidth >= 700){
      document.getElementById('shirtImage').addEventListener('onMouseOver',this.toggleCloseup);
      document.getElementById('shirtImage').addEventListener('onMouseOut',this.toggleCloseup);
    }
    else{
      document.getElementById('shirtImage').addEventListener('onClick',this.toggleCloseup);
    }
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
      <img id='shirtImage' src={this.state.closeup ? (closeup):(shirt)} onClick={ () => this.toggleCloseup()}/>
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" style={{display:'grid', gridTemplateColumns:'auto', gridRowGap:'2vh'}}>
         <input type="hidden" name="cmd" value="_s-xclick"/>
         <input type="hidden" name="hosted_button_id" value="6WLDEUCDJZ4GU"/>
             <input type="hidden" name="on0" value="Sizes"></input>
         <select name="os0">
           <option value="small">small </option>
           <option value="medium">medium </option>
           <option value="large">large </option>
           <option value="xl">xl </option>
         </select>
         <input style={{margin:'0 auto'}}type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
       <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
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
