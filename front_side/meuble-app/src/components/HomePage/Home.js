import Sorting from "../Sorting/Sorting";
import CardsProduits from "../CardsProduits/CardsProduits";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="sidenav">
        <Sorting />
      </div>
      <div className="homecontent">
        <CardsProduits />
      </div>
    </div>
  );
}

export default Home;
