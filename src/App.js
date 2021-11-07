

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import ManageAllService from './Pages/ManageAllService/ManageAllService';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
       <Header></Header>
         <Switch>
           <Route exact path='/home' >
              <Home></Home>
           </Route>
           <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/manageallservice'>
              <ManageAllService></ManageAllService>
            </PrivateRoute>
            <PrivateRoute exact path='/detail/:serviceId'>
              <Detail></Detail>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
         </Switch>
         <Footer></Footer>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
