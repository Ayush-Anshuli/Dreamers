
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import PostaJob from './pages/PostaJob'
import Myjobs from './pages/Myjobs'
import About from './pages/About'
import JobDetails from './pages/JobDetails'
// import UpdateJob from './pages/UpdateJob'
function App() {
  

  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post-job' element={<PostaJob/>}/>
        <Route  path='/my-job' element={<Myjobs/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/details/:id' element={<JobDetails/>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
