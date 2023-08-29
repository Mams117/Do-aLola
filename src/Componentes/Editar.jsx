import React, { useState, useEffect } from 'react';
const Editar = ({recetas,datos,setDatos,leerLocalStorage, setEditar}) => {

    const actualizarInformacion = (e, id) => {
        e.preventDefault();
        let recetasActuales = leerLocalStorage();
    
        let index = recetasActuales.findIndex((recetas) => recetas.id === id);
        let datosForm = {
          id,
          receta: e.target.receta.value,
           ingrediente1:e.target.ingrediente1,
           ingrediente2:e.target.ingrediente2,
          ingrediente3:e.target.ingrediente3,
          ingrediente4:e.target.ingrediente4,
           instruciones:e.target.instruciones,
           imagen:e.target.imagen
        };
        recetasActuales[index] = datosForm;
        localStorage.setItem("recetas", JSON.stringify(recetasActuales));
        setEditar(0);
      };
    return ( <>
    
    <form
        onSubmit={(e) => {
          actualizarInformacion(e,recetas.id);
        }}
      >
        <input
          type="text"
          id="id"
          className="form-control"
          name="id"
          placeholder=""
          hidden="false"
        />
        <input
          type="text"
          id="receta"
          className="form-control"
          name="receta"
          placeholder="Titulo"
          defaultValue={recetas.receta}
        />

<input
          type="text"
          id="ingrediente1"
          className="form-control"
          name="ingrediente1"
          placeholder="Titulo"
          defaultValue={recetas.ingrediente1}
        />

<input
          type="text"
          id="ingrediente2"
          className="form-control"
          name="ingrediente2"
          placeholder="Titulo"
          defaultValue={recetas.ingrediente2}
        />

<input
         type="text"
         id="ingrediente3"
         className="form-control"
         name="ingrediente3"
         placeholder="Titulo"
         defaultValue={recetas.ingrediente3}
        />


<input
         type="text"
         id="ingrediente4"
         className="form-control"
         name="ingrediente4"
         placeholder="Titulo"
         defaultValue={recetas.ingrediente4}
        />





        <textarea
          id="instruciones"
          name="instruciones"
          className="form-control mt-2"
          placeholder="Descripción"
          rows="5"
          style={{ resize: "none" }}
          defaultValue={recetas.instruciones}
        ></textarea>
        <input
          type="text"
          id="imagen"
          className="form-control mt-2"
          name="imagen"
          placeholder="url de la imagen"
          defaultValue={recetas.imagen}
        />
        <button type="submit"
          
          className="btn btn-success w-100 mt-2"
          data-bs-dismiss="offcanvas"> Actualizar
          
        </button>
      </form>
    
    
    </> );
}
 
export default Editar;