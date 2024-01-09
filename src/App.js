import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => (
  <div className="font-inter text-primaryFontColor flex">
    <Navbar />
    <div className="flex-grow ml-0 md:ml-[200px]">
      <Header />
      <Main />
    </div>
  </div>
);
export default App;
