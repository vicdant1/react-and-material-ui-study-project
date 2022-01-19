import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { orange, amber, green, red, grey } from "@material-ui/core/colors";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import NewProject from "./pages/NewProject/NewProject";
import Support from "./pages/Support/Support";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[500],
        light: amber[300],
        contrastText: "#e3f2fd",
      },
      secondary: {
        main: orange[500],
        light: orange[300],
      },
      alertSuccess: { 
        main: green[500], 
        light: green[300]
      },
      alertFail: { 
        light: red[700],
        main: red[500]
      },
      dark: {
        main: '#212121',
        light: '#363636'
      },
      card: {
        main: grey[200],
        light: grey[100]
      }
    },
    spacing: 8,
  });

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="newproject" element={<NewProject />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

/*
O que era switch no router virou Routes
e antes, o que era declarado como <Route path='/' exact component={lorem}/> agora é 
<Route path='/' element={<Lorem//>}/>
nao precisa mais do exact
*/

export default App;
