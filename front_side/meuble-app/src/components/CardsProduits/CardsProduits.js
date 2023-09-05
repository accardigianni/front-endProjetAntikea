//Elements cards X2 qui affiche les produits en utilisant .map sur un objet/tableau
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CardsProduits.css";
// import products from "./public/antikea.meubles.json" (attention chemin à revoir)

function CardsProduits() {

  const [data, setData] = useState([])
  const apiGET = () => {
      fetch('http://localhost:3000/meubles', {
        method: "GET",
      })
      .then(response => response.json())
      .then(json => {
          setData(json)
      })
  } 

  useEffect(() => {
      apiGET()
  },
  [data])

  //CardsProduits()

  return (
    //changer md={2} pour afficher + ou - de cards (ici initialisé à 2)
    <div className="Cards">
      <Row xs={1} md={2} className="g-4">
        {data.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                className="product-image"
                alt="Card image"
              />
              <Card.Body
                style={{
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Card.Title
                  className="Cards-titre"
                  style={{
                    display: "contents",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {product.nom}
                </Card.Title>
                <Card.Text
                  className="Cards-description"
                  style={{ fontSize: "14px" }}
                >
                  <p>{product.description}</p>
                  <p>{product.prix} €</p>
                </Card.Text>
              </Card.Body>
              {/* Bouton acheter fonctionnalité à rajouter */}
              <a
                href="#"
                className="btn btn-dark"
                style={{ fontWeight: "bold", color: "#FFF951" }}
              >
                Acheter
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsProduits;
