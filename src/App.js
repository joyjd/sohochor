import "./App.scss";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./modules/Header";
import MainContent from "./pages/MainContent";
import Footer from "./modules/Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
