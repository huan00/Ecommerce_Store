import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ViewProduct from './pages/ViewProduct'
import AddBrand from './pages/AddBrand'
import AddCategory from './pages/AddCategory'
import AddProduct from './pages/AddProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import EditPage from './pages/EditPage'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/addbrand" element={<AddBrand />} />
          <Route path="/user/profile/:id" element={<Profile />} />
          <Route path="/products/addproduct" element={<AddProduct />} />
          <Route path="/products/addcategory" element={<AddCategory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/edit/:id" element={<EditPage />} />
          <Route path="/products/viewproduct/:id" element={<ViewProduct />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
