import './App.css';
import TourCard from './components/TourCad';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
    <Container maxWidth="sm">
    <Grid container spacing={1}>
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
    </Grid>
    </Container> 
      
    </div>
  );
}

export default App;
