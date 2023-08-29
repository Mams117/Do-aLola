import React, { useState, useEffect } from 'react';
import Editar from './Editar';
const ListarRecetetas = ({datos,setDatos}) => {


    const [editar, setEditar] = useState(0);
    const leerLocalStorage = () => {

        let recetas= JSON.parse(localStorage.getItem("recetas"));
        setDatos(recetas);
        return recetas;
        
      };


      const borrarReceta = (id) => {
       
        let bdLocal = leerLocalStorage();
    
        //creamos un nuevo arreglo donde filtramos por el id
        let bdNueva = bdLocal.filter((datos) => datos.id !== parseInt(id));
    
        //actualizamos el estado del componente principal APP
        setDatos(bdNueva);
    
        //Guardamos en la base de datos del localStorage
        localStorage.setItem("recetas", JSON.stringify(bdNueva));
      };


      
    
      //metodo de carga inicial del componente
      useEffect(() => {
        leerLocalStorage();
      }, []);
    return ( <>
    

    <div className="container">
                <div className="row">

                {datos == null || datos.length === 0 ? (
            <h1>No hay datos</h1>
      ) : (
        <>
          {datos.map((recetas) => {
            return (
                <div className="col-4">
             <div class="card" style={{width: "18rem", marginBottom:"50px", margin:"10px"}}>
             <img src={recetas.imagen}  className="card-img-top w-75 img-fluid img-thumbnail card-img-top mx-auto mt-2"
 alt="imagen"/>
  <div class="card-body" style={{marginBottom:"50px", margin:"10px"}}>
    <h5 class="card-title">{recetas.receta}</h5>
    <p class="card-text">{recetas.preparacion}</p>
  </div>
  <ul class="list-group list-group-flush" style={{margin:"5px"}}>
    <li class="list-group-item">{recetas.ingrediente1}</li>
    <li class="list-group-item">{recetas.ingrediente2}</li>
    <li class="list-group-item">{recetas.ingrediente3}</li>
    <button className="btn btn-success w-100 mt-2"onClick={()=>{
        setEditar(recetas.id)
    }} >Editar</button> 

<button className="btn btn-danger w-100 mt-2"onClick={() => {borrarReceta(recetas.id);}}>Borrar</button>

{editar===recetas.id &&(<Editar recetas={recetas}
                            datos={datos}
                            setDatos={setDatos}
                            leerLocalStorage={leerLocalStorage}
                            setEditar={setEditar}/>
                )
          }
  </ul>
</div>




                </div>
              
            );
          })}
        </>
      )}

                 

                </div>
            </div>
    
    </> );
}
 
export default ListarRecetetas;