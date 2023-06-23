import React from 'react'
import Header from './components/header';
import Banner from './components/banner';
import Special from './components/special';
import Products from './components/products';
import Blog from './components/blog';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <main className="main">
     <Banner/>
     </main>
     <Special/>
     <Products/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
