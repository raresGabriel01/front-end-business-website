import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head.js'
import Menu from './components/Menu.js'
import About from './components/About.js'
import Services from './components/Services.js'
import Pricing from './components/Pricing.js'
import Reviews from './components/Reviews.js'
import Footer from './components/Footer.js'
import ShopMap from './components/ShopMap.js'
import $ from 'jquery'
class App extends React.Component {
  constructor(){
    super()
    this.state ={

    }
  }

  render() {

    return (
      <div>
        <Head/>
        <Menu/>
        <About/>
        <Services/>
        <Reviews/>
        <Pricing/>
        <ShopMap />
        <Footer/>
      </div>
    )
  }

  componentDidMount() {
   
  }
}

export default App;
