import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


//componentes
//import Login from './componentes/login/login';
//import Menu from './componentes/navbar/navbar'
import AppRoutes from './componentes/router/router';
import Home from './componentes/home/home';

function App() {
  return (
    <div className="App">
       <Container>
       <AppRoutes/>
    </Container>
    </div>
  );
}

export default App;
