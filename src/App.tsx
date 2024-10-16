
import "./App.css";
import Square from "./Square";

const App = () => {

  const resetPage = () => {
    window.location.reload();
  };

 


  return (
    <>
    <div className="squaresContainer">
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className="btn__container">
      <button onClick={resetPage} className="btn">Reload Page</button>
    </div>
    </>
  );
};
export default App;