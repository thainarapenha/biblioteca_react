import React from "react";
import './livros.css'
const ListaLivros = (props) => {
  const data = props.value;

  return(
    <div className='lista'>
      {data?.map((item, index) => (
        <div className="itens" key={index}>
          <h3>{item.title}</h3>
          <p>{item.autor}</p>
          <p><a href={item.url} target='_blank' rel="noreferrer">{item.url}</a></p>
        </div>
      ))}
    </div>
  );
};
  
export default ListaLivros;