import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './sites/Home';
import GetStarted from './sites/GetStarted';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: '#003333'
  },
  mobile: '768px'
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}
