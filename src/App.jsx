import Background from './components/Background/Background';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <Background>
      <Container sx={{ paddingTop: 5 }}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Header />
            <Contact />
            <About />
          </CardContent>
        </Card>
      </Container>
    </Background>
  )
}

export default App