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
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">

<input type="hidden" name="business" value="inhouse.phl@gmail.com"/>

<input type="hidden" name="cmd" value="_cart"/>
<input type="hidden" name="add" value={this.state.quantity}/>

<input type="hidden" name="item_name" value="GRITTYCITY"/>
<input type="hidden" name="amount" value={this.state.value}/>
<input type="hidden" name="currency_code" value="USD"/>
<input type="hidden" name="shipping" value='00.00'/>
<input type="hidden" name="shipping2" value="00.00"/>
<div><input type="hidden" name="on0" value="Sizes"/>Size&nbsp;<select name="os0">
          <option value="SMALL">SMALL </option>
          <option value="MEDIUM">MEDIUM </option>
          <option value="LARGE">LARGE </option>
          <option value="XL">XL </option>
        </select></div>
        {/*<input type="hidden" name="on1" value="Pickup"/><select style={{display:'none'}} value={this.state.pickup} name="os1">
          <option value='true'>Yes </option>
          <option value="false">No </option>
        </select>*/}
<input style={{margin:'0 auto'}} type="image" name="submit"
  src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
  alt="Add to Cart"/>
<img alt="" width="1" height="1"
  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"/>
</form>
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
