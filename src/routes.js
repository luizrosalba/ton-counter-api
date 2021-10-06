import React, {useState, useEffect} from 'react'
import { 
  BrowserRouter as Router,
  Redirect, 
  Route,
  Switch 
} from 'react-router-dom'

import { 
  // getKeyValue,
  // setKeyValue,
  // getInfoKey,
  updateKeyValue
} from "./service/countService";

import Header from './common/template/header'
import Footer from './common/template/footer'

import Home from './pages/Home'
import User from './pages/User'
import CreateUser from './pages/CreateUser'

const Routes = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {

    // let keyValue= getKeyValue()
    // keyValue.then(
    //     (res)=>{setCount(res.value)
    // });

    updateKeyValue().then(
      (res)=>{
        setCount(res.value)
    })

    // setKeyValue(0).then(
    //     (res)=>{setCount(res.value)
    // })

    // let info= getInfoKey()
    // info.then(
    //     (res)=>{console.log(res)}
    // )

  }, [])

  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/createUser" component={CreateUser} />
          <Redirect from='*' to='/home' />
        </Switch>
        <Footer 
          count={count}
        />
    </Router>
  )
}

export default Routes

