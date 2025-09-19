import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Gallery />
      <Footer />
    </>
  );
}

// ================================================

//state
// - state to store API image data
// - state to store the index value (navigate between images)

//effects
// fetch data from an API
// once the data is fetched, update the image data state to store the fetched data

// function to control what index we are currently clicking on
// the index represents a specific image object in the array

// function handleSwitchImage(index){
//   setIndex(index)
// }
