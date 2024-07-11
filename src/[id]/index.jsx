import React from "react"
import { useParams } from "react-router-dom";
import "./index.css"

export default function IdComponent() {
  const { id } = useParams();


  return (
    <>
      <div className="container">
        <div className="imageBox">
          <img src={"../images/items/" + id + ".jpg"} alt="image" className="image"/>
        </div>
        <div className="box">
          <h1>Titel konnte nicht geladen werden</h1>

        </div>
      </div>
    </>
  );
}
