import React,{Component} from 'react';
import Navbar from './Components/navbar'
import Home from './Components/home'
import Event from './Components/event'
import Events from './Components/events'
import Rules from './Components/rules'
import { Route, BrowserRouter,Switch} from 'react-router-dom'
import Footer from './Components/footer'

class App extends Component{
  componentDidMount(){
    console.log('Hello, I\'m Gaurang Govekar. I made this site using ReactJS and materialise.css. Only the console enthusiast must know that I made this page. I\'m not into webdev but get in touch with me @pythagaurang on instagram if you have any advice or critic or you just happen to read this.');
  }
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
