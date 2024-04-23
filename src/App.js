import styled from 'styled-components';
import './App.css';
import Header from './components/Banner/Header';
import ProfComponent from './components/Banner/ProfComponent';
import Services from './components/Service/Services';
import Projects from './components/Projects/Projects';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';

const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`
const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`

function App() {
  return (
    <Container>
      <Banner>
        <Header/>
        <ProfComponent/>
      </Banner>
      <Services/>
      <LightColor>
        <Projects/>
      </LightColor>
        <Clients />
      <LightColor>
        <Footer/>
      </LightColor>
    </Container>
  );
}

export default App;
