import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Block1 from './components/Block1/Block1';
import Layer1 from './components/Layer1/Layer1';
import Layer2 from './components/Layer2/Layer2';
import Footer from './components/Footer/Footer';
import Block2 from './components/Block2/Block2';
import Block3 from './components/Block3/Block3';
import Block4 from './components/Block4/Block4';
import Block5 from './components/Block5/Block5';
import Block6 from './components/Block6/Block6';
import Block7 from './components/Block7/Block7';
import Block8 from './components/Block8/Block8';
import JivoSite from './components/JivoSite/JivoSite';
// import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  let test = props;
  // debugger;
  return (
    <div className="App">
      <Header />
      <Layer1 />
      <Layer2 />
      <div className="container">
        <Block1 data={props.data.orderPromoReducer.orderPromo}
          dispatch={props.dispatch}
          >
        </Block1>
        <Block2 data={props.data.productTypesReducer.productTypes} />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 data={props.data} dispatch={props.dispatch}/>
        <JivoSite />
      </div>
      <Footer />
    </div>
  );
}


export default App;
