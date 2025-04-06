import Swal from "sweetalert2";
import { useState } from "react";

function Form({ setTitulo, setImgSRC, setDescripcion, agregarPost }) {
  const [titulo, setTituloLocal] = useState("");
  const [imgSRC, setImgSRCLocal] = useState("");
  const [descripcion, setDescripcionLocal] = useState("");

  const handleAgregar = () => {
    if (!titulo || !imgSRC || !descripcion) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos (Título, Imagen y Descripción).",
      });
      return;
    }


    setTitulo(titulo);
    setImgSRC(imgSRC);
    setDescripcion(descripcion);

    agregarPost({
      titulo,
      img: imgSRC,
      descripcion,
      likes: 0,
    });
    setTituloLocal("");
    setImgSRCLocal("");
    setDescripcionLocal("");
  };

  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input
          value={titulo}
          onChange={(event) => setTituloLocal(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input
          value={imgSRC}
          onChange={(event) => setImgSRCLocal(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcionLocal(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={handleAgregar} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Form;
