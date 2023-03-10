import './App.css';
import { Route,Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Categories from './pages/Categories'
import Single from './pages/Single'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Comments from './pages/Comments'
// import Login from './pages/Login'
import Contact from './pages/Contact'
import { useState } from 'react';
import { useData } from './utils/Hooks';

function App() {
  const [category, setcategory] = useState('All')
  const query = useData(['query'], '/products/category')
  const [cart, setcart] = useState([])

  const pushItem = (e) => {
    if(query.length > 0){
      setcart([...cart, query[e.target.getAttribute("order")]])
    }
  }
 
  return (
    <div className="App">
        <Layout>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/categories' element={<Categories/>} cart={cart} category1={category} setcart={setcart} setcategory={setcategory} pushItem={pushItem}/>
                <Route path='/categories/:id' element={<Single/>}/>
                <Route path='/comments' element={<Comments/>}/>
                {/* <Route path='/login' element={<Login/>}/> */}
                <Route path='/contact' element={<Contact/>}/>
             </Routes>
        </Layout>
    </div>
  );
}

export default App;
