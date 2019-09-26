import React,{Component} from 'react';
import Navbar from './Components/navbar'
import Home from './Components/home'
import Event from './Components/event'
import Events from './Components/events'
import Rules from './Components/rules'
import { Route, BrowserRouter,Switch} from 'react-router-dom'
import Footer from './Components/footer'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/rules' component={Rules}/>
          <Route exact path='/events' component={Event} />
          <Route path="/events/:event_id" component={Events} />
          </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
