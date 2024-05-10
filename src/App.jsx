import "./App.css";
import Header from "./Components/Top/Header/Header";
import Navbar from "./Components/Top/Navbar/Navbar";
import Box from "./Components/Center/Box/Box";
import Slider from "./Components/Center/Slider/Slider";
import { Routes, Route } from "react-router-dom";
import { slidesData } from "./Components/Center/Slider/SliderJs";
import Types from "./Components/Top/Types/Types";
import ButtonMore from "./Components/Center/ButtonMore/ButtonMore";
import Box2 from "./Components/Center/Box/Box2";
import Appliances from "./Components/Center/Categories/Appleances/Appleances";
import Clothes from "./Components/Center/Categories/Clothes/Clothes";
import Accessories from "./Components/Center/Categories/Accessories/Accessories";
import Beauty from "./Components/Center/Categories/Beauty/Beauty";
import Health from "./Components/Center/Categories/Health/Health";
import Game from "./Components/Center/Categories/Game/Game";
import Sport from "./Components/Center/Categories/Sport/Sport";
import Electronics from "./Components/Center/Categories/Electronics/Electronics";
import Questions from "./Components/Center/Questions/Questions";
import Search from "./Components/Search/Search";
import NotFound from "./Components/Center/ChosKor/NotFound";
import SignIn from "./Components/Center/Sign in/SignIn";
import Pick from "./Components/Pick/Pick";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Types />
      <Routes>
        <Route path="/pick-point" element={<Pick />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/shop/" element={<Slider slides={slidesData} />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/appliances" element={<Appliances />}></Route>
        <Route path="/clothes" element={<Clothes />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/sport" element={<Sport />}></Route>
        <Route path="/basket" element={<NotFound />}></Route>
        <Route path="/choosen" element={<NotFound />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
      <Box />
      <Routes>
        <Route path="/more" element={<Box2 />}></Route>
      </Routes>
      <ButtonMore />
    </div>
  );
}

export default App;
