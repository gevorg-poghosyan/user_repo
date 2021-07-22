import './App.css';
import UsersContainer from './Containers/UsersContainer';
import {Route} from 'react-router-dom';
import HeaderContainer from './Containers/HeaderContainer';
import ProfileContainer from './Containers/ProfileContainer';

function App() {
  return (
    <div className="App">
          <HeaderContainer/>
         <Route path = "/user" exact
                     render={()=><UsersContainer/>}/>

          <Route path = "/user/:id" 
                     render={()=><ProfileContainer/>}/>
      
          
    </div>
  );
}

export default App;
