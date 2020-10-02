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
        <Footer/>
      </div>
    )
  }
}

export default App;
