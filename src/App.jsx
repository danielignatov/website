import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

function App() {

  return (
    <Container sx={{ paddingTop: 5 }}>
      <Card sx={{ padding: 5 }}>
        <CardContent>
          <Header />
          <Contact />
          <About />
        </CardContent>
      </Card>
    </Container>
  )
}

export default App