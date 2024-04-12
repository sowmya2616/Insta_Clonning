import { Route,Routes } from "react-router-dom";
import './App.css';
import Display from "./component/Display";
//import Dummy from './component/Dummy';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Singlepost from "./component/Singlepost";

function App() {
  return (
    <div className="App">
      {/* <Dummy /> */}
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/signup' element={<SignUp/>} />
        <Route path= '/display' element={<Display/>}/>
        <Route path= '/display/postid' element={<Singlepost/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
