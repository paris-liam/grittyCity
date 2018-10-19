import React from 'react'
import { Link } from 'gatsby'
import HeaderImg from '../images/headerIMG.png';
import shirt from '../images/1.jpg';
import Layout from '../components/layout'
import styled from 'styled-components';


const GritGrid = styled.div`
  background-color:black;
  margin:0;
  display:grid;
  height:100vh;
  grid-template-rows:auto auto auto;
  grid-template-columns: auto;
  & > *{
    margin: 0 auto
  }
  form{
    background-color:black;
    color:white;
    width:100%;
    text-align:center;
    margin-top:2vh;
    display:grid;
    grid-template-columns:auto;
    grid-template-rows:auto;
    grid-row-gap: 2vh;
    select{
      width:30%;
      margin: 0 auto;
    }
  }
  img{
    width:80%;
    @media only screen and (min-width:800px){
      width:40%;
    }
    @media only screen and (min-width:1200px){
      width:20%;
    }
  }
  @media only screen and (max-width:500px){
    height:90vh;
    }
`
const IndexPage = () => (
  <Layout>
   <GritGrid>
   <img src={HeaderImg}  />
   <img src={shirt} />
   <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
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
   </GritGrid>
  </Layout>
)

export default IndexPage
