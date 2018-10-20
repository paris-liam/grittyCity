import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import shirt from '../images/grit.jpeg';
import styled from 'styled-components';
import pretzel from '../images/PRETZEL.gif';
import creamcheese from '../images/creamcheese.png';
import HeaderImg from '../images/headerIMG.png';

import './layout.css'

const GritGrid = styled.div`
  margin:0 0;
  background-color:black;
  margin:0;
  display:grid;
  height:100vh;
  grid-template-rows:auto;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-areas:'imageRow mainRow image2Row';
  & > *{
    margin: 0 auto
  }
  @media only screen and (max-width:700px){
    height:100vh;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'mainRow mainRow';
    & > div#image1{
      display:none !important;
    }
    & > div#image2{
      display:none !important;
    }
   }
& > div#image1{
  background-color:black;
  justify-items:center;
  align-items:center;
  padding: 3vh 0;
  grid-template-columns:auto;
  grid-template-rows: auto auto auto;
  grid-row-gap:5vh;
  display:grid;
  & > img{
    max-width:40% !important;
  }
}
& > div#image2{
  background-color:black;
  justify-items:center;
  align-items:center;
  padding: 3vh 0;
  grid-template-columns:auto;
  grid-template-rows: auto auto auto;
  grid-row-gap:5vh;
  display:grid;
  & > img{
    max-width:40% !important;
  }
}

& > div#mainRow1{
  background-color:black;
  display:grid;
  grid-template-rows:auto auto auto;
  grid-template-columns: auto;
  & > img{
    margin: 0 auto;
    width:100%;
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

  & > img{

    width:80%;
    @media only screen and (min-width:800px){
      width:50%;
    }
    @media only screen and (min-width:1200px){
      width:70%;
    }

  }
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'GRITTYCITY' },
            { name: 'keywords', content: 'gritty, philadelphia, t-shirt' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GritGrid>
   <div id='image1' style={{gridArea:'imageRow'}}>
      <img src={creamcheese}></img>
      <img src={pretzel}></img>
      <img src={creamcheese}></img>
   </div>
     <div id='mainRow1' style={{gridArea:'mainRow'}}>
   <img src={HeaderImg}  />
   <img src={shirt} />
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
   </div>
   <div id='image2' style={{gridArea:'image2Row'}}>
      <img src={pretzel}></img>
      <img src={creamcheese}></img>
      <img src={pretzel}></img>
   </div>
   </GritGrid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
