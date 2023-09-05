import React, { useState } from 'react';


export default function AddProduits() {
    const [nom, setNom] = useState('');
    const [type, setType] = useState('');
    const [prix, setPrix] = useState('');
    const [image, setImage] = useState('');
    const [couleur, setCouleur] = useState('');
    const [description, setDescription] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [stock, setStock] = useState('');
    const [id_vendeur, setId_vendeur] = useState('');
    const [date_d_ajout, setDate_d_ajout] = useState('');
    const [statut, setStatut] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Faire quelque chose avec les données du formulaire, par exemple, les envoyer à un serveur
        //Réinitialiser les champs du formulaire
        setNom('');
        setType('');
        setPrix('');
        setImage('');
        setCouleur('');
        setDescription('');
        setDimensions('');
        setStock('');
        setId_vendeur('');
        setDate_d_ajout('');
        setStatut('');

    };

    return (
        <div>
            <h1>AJOUTER UN MEUBLE</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        className="form-control"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type :</label>
                    <textarea
                        type="text"
                        id="type"
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="prix">Prix :</label>
                    <input
                        type="number"
                        id="prix"
                        className="form-control"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Url Image :</label>
                    <input
                        type="url"
                        id="image"
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="couleur">Couleur :</label>
                    <input
                        type="text"
                        id="couleur"
                        className="form-control"
                        value={couleur}
                        onChange={(e) => setCouleur(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description :</label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="dimensions">Dimensions :</label>
                    <input
                        type="text"
                        id="dimensions"
                        className="form-control"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock :</label>
                    <input
                        type="number"
                        id="stock"
                        className="form-control"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="id_vendeur">Id_vendeur :</label>
                    <input
                        type="text"
                        id="id_vendeur"
                        className="form-control"
                        value={id_vendeur}
                        onChange={(e) => setId_vendeur(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="date_d_ajout">Date_d_ajout :</label>
                    <input
                        type="date"
                        id="date_d_ajout"
                        className="form-control"
                        value={date_d_ajout}
                        onChange={(e) => setDate_d_ajout(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="statut">Statut :</label>
                    <input
                        type="text"
                        id="statut"
                        className="form-control"
                        value={statut}
                        onChange={(e) => setStatut(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Poster
                </button>
            </form >
        </div >
    )
}