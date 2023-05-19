import './App.css'
import { Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPages/AboutPages'
import PostList from './pages/PostList/PostList'
import Layout from './component/layout'
import FormInput from './pages/Form/FormInput'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
              <Route index element={<h3>Home page</h3>}/>
              <Route path='about' element={<AboutPage/>} />
              <Route path='posts' element={<PostList/>} />
              <Route path='form' element={<FormInput/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App