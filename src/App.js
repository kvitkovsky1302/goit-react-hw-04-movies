import { Switch, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';

function App() {
  return (
    <Container>
      <AppBar />

      <Route path="/">
        <HomeView />
      </Route>
    </Container>
  );
}

export default App;
