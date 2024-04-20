import styled from 'styled-components';
import './App.css';
import Header from './components/Banner/Header';
import ProfComponent from './components/Banner/ProfComponent';

const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`

function App() {
  return (
    <Container>
      <Banner>
        <Header/>
        <ProfComponent/>
      </Banner>
    </Container>
  );
}

export default App;
