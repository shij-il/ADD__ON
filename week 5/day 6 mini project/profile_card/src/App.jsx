import Card from "./card";
import "./App.css";
import shijilImg from "./assets/shijil.jpg";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Profile Cards</h1>
      <div className="card-container">
        <Card name="Anu" role="Developer" image="https://randomuser.me/api/portraits/women/44.jpg" />
        <Card name="Rahul" role="Designer"  image="https://randomuser.me/api/portraits/men/32.jpg"/>
        <Card name="Shijil" role="Full Stack Developer" image={shijilImg} />
      </div>
    </>
  );
}
export default App;