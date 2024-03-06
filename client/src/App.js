import React from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/index';
import ListOfResults from './components/Test/ListOfResults/ListOfResults'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Test from './components/Test/Test';


function App() {

  const [isAuthenticated, setisAuthenticated] = React.useState(false)
  // default state is false because firstly we wanna make sure the user isn't authenticated 

  const setAuth = boolean => { // setAuth always get true or false from components that have this function as props
    setisAuthenticated(boolean) // changing the state
  }

  const isAuth = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/validation', {
        method: 'GET',
        headers: { token: localStorage.token }
      })

      const parseRes = await response.json()

      parseRes === true ? setisAuthenticated(true) : setisAuthenticated(false) // if token is valid, so the page continues loading the dashboard

    } catch (error) {
      console.log(error.message)
    }
  }

  React.useEffect(() => { // we use useEffect not to reset useState to default value(false) when updating the browser
    isAuth()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listofresults' element={<ListOfResults setAuth={setAuth}/>} />
          <Route path='/signin' element={!isAuthenticated ? <Signin setAuth={setAuth}/> : <Navigate replace to="/test" />} />
          {/* if user IS NOT authorized he's navigated to login, if he is, he is allowed to access to dashboard*/}
          <Route path='/signup' element={!isAuthenticated ? <Signup setAuth={setAuth} /> : <Navigate replace to="/signin" />} />
          {/* if user IS NOT authorized he's navigated to register, if he is, he is allowed to access to login*/}
          <Route path='/test' element={isAuthenticated ? <Test setAuth={setAuth}/> : <Navigate replace to="/signin" />} />
          {/* if user IS authorized he's navigated to dashboard, if he isn't, he is redirect to login*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
