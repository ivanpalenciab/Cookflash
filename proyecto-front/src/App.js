import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

//componentes
import Login from './componentes/login/login';
import ImagenLogo from './componentes/imagenes/imagenLogo'

function App() {
  return (
    <div className="App">
       <Container>
        <ImagenLogo/>
       <Login/>
    </Container>
    </div>
  );
}

export default App;
