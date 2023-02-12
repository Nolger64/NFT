import "./App.css";
import image from "./assets/image-equilibrium.jpg";
import avatar from "./assets/image-avatar.png";
import clock from "./assets/icon-clock.svg";
import ethereum from "./assets/icon-ethereum.svg";

function App() {
  return (
    <div className="cont">
      <div className="contCard">
        <div className="contImg">
          <img src={image} className="imgMain" />
        </div>
        <div>
          <h3 className="tittle">Equilibrium #3429</h3>
          <h4 className="info">
            Our equilibrium collection promotes balance and calm.
          </h4>
          <div className="contValue">
            <span className="ethVal">
              <img src={ethereum} alt="" className="icon" /> 0.041 ETH
            </span>
            <span className="ethTime">
              <img src={clock} alt="" className="icon" /> 3 Days left
            </span>
          </div>
          <hr className="hr" />
          <div className="creaCont">
            <img src={avatar} alt="" className="imgAva"/>
            <h3 className="nameCrea">
              Creation of <p className="name">Jules Wyvern</p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
