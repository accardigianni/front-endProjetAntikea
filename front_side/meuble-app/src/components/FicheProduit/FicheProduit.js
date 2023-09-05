import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FicheProduit() {
  const [data, setData] = useState([]);
  const apiGET = () => {
    fetch("http://localhost:3000/meubles/649c311fe53710ff6ee4bd0b", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    apiGET();
  }, [data]);

  return (
    <div>
      <h2>Fiche Produit</h2>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body
          style={{
            textAlign: "center",
          }}
        >
          <Card.Title>{data.nom}</Card.Title>
          <Card.Text>
            {data.description}
            <br />
            {data.dimensions}
            <br />
            {data.couleur}
            <br />
            {data.etat}
            <br />
            Ajouté le : {data.date_d_ajout}
            <br />
            {data.prix} €
          </Card.Text>
          <Button variant="dark">Acheter</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FicheProduit;
