import React from "react";
import ListaLivros from "../livros/livros";

const Filtro = (props) =>{
    const novaLista = props.list;
    const filtro = novaLista?.filter(val => {
        if (val.title){
            return val;
        }else{
            return null;
        }
    })

    console.log('novaLista', novaLista)
    console.log('filtro', filtro)
  
    return(  
      filtro?.map((item) => (
        <div className='item' key={parseInt(item.objectID)}>
          <ListaLivros item = {item} />
        </div>
      ))
    )
  }
  export default Filtro;