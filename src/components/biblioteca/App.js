import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import ListaLivros from '../livros/livros';
import apiURL from '../conexaoAPI/conexaoAPI';
import Input from '../input/input';
import './App.css';

function App(props) {
  const [sectionData, setSectionData] = useState(props.sectionData);

  console.log('opa', sectionData)
  console.log('oooopa',  apiURL)
  
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
        <Input />
        <ListaLivros value={sectionData}/>
      </section>

      <Footer/>
    </main>
  );
}

export default App;
