import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import ListaLivros from '../livros/livros';
import apiURL from '../conexaoAPI/conexaoAPI';
import Input from '../input/input';
import Filtro from '../filtroPesquisa/filtroPesquisa';
import './App.css';

function App(props) {
  const [sectionData, setSectionData] = useState(props.sectionData);

  console.log('opa', sectionData)
  
  const fetchData = async (value) => {
    const response = await apiURL.get(value)
    setSectionData(response?.data.hits)
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <main>
      <Header/>
      <section className='pesquisa'>
        <Input/>
        <Filtro list={ListaLivros.hits}/>
        <ListaLivros value={sectionData}/>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
