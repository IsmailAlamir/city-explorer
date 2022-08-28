import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render() {
    return (

<div style={{ textAlign:'center'}}>
      <Header />
      <Main />
      <Footer />

</div>
    
  )
    }



}

export default App