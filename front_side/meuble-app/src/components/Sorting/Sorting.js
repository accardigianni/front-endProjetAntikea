//Etat couleur type prix matière

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import "./Sorting.css";

function SortingComponent() {
  return (
    <div className="sorting">
      <ul>
        <div className="list-group">
          <li className="sorting-list-header">Meubles</li>
          <a href="#" className="sorting-text">
            Canapé
          </a>
          <a href="#" className="sorting-text">
            Chaise
          </a>
          <a href="#" className="sorting-text">
            Fauteuil
          </a>
          <a href="#" className="sorting-text">
            Banc
          </a>
        </div>
        <br />
        <div className="list-group">
          <li className="sorting-list-header">Etat</li>
          <a href="#" className="sorting-text">
            Très bon état
          </a>
          <a href="#" className="sorting-text">
            Bon état
          </a>
          <a href="#" className="sorting-text">
            Etat moyen
          </a>
        </div>
        <br />
        <div className="list-group">
          <li className="sorting-list-header"> Matière</li>
          <a href="#" className="sorting-text">
            Bois
          </a>
          <a href="#" className="sorting-text">
            Fer
          </a>
          <a href="#" className="sorting-text">
            Verre
          </a>
          <a href="#" className="sorting-text">
            Cuir
          </a>
        </div>
        <br />
        <div className="list-group">
          <li className="sorting-list-header">Couleurs</li>
          <select className="form-select" aria-label="Default select example">
            <option selected>Sélectionner</option>
            <option value="Bleu">Bleu</option>
            <option value="Rouge">Rouge</option>
            <option value="Vert">Vert</option>
          </select>
        </div>
        <br />
        <div className="list-group">
          <li className="sorting-list-header">Prix</li>
          <br />
          <div className="filter-content">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-md-1">
                  <label className="sorting-text">Min</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0 €"
                    style={{ fontSize: "9px" }}
                  />
                </div>
                <br />
                <div className="form-group col-md-1 text-right">
                  <label className="sorting-text">Max</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1000 €"
                    style={{ fontSize: "10px", display: "wrap" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SortingComponent;
