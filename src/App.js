
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { onMessageListener, requestForToken } from './firebase';
import DefaultPage from './pages/DefaultPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import MyOrder from './pages/MyOrder';
import Register from './pages/Register';
function App() {
// const [notification, setNotification] = useState({title: '', body: ''});
// const [key,setKey] = useState("")
// const postMessenger = () => {
//   axios.post(`http://localhost:5000/burger-demo-44d52/us-central1/app/sendFirebase?id=${key}`)
// }
// useEffect(() => {
// requestForToken((data) => {
//   setKey(data)
// });
// onMessageListener()
// .then((payload) => {
//   console.log("da nhan"); 
//   setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
// })
// .catch((err) => console.log('failed: ', err));


    
// },[])
  return (
    <div className="App">
    {/* <Button onClick={postMessenger} variant='outlined'>Test</Button> */}
      <Routes>
        <Route path='/hamberger/' element={<DefaultPage />}>
          <Route path='/hamberger/login' element={<Login />}/>
          <Route path='/hamberger/' element={<HomePage />}/>
          <Route path='/hamberger/register' element={<Register />}/>
          <Route path='/hamberger/orders' element={<MyOrder />}/>
        </Route>
      </Routes>

  
    </div>

  );
}

export default App;
