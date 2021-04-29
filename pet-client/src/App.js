import { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css';
import './index.css'
import Header from './layout/Header'
import PetsList from './components/PetList'
import Layout from './layout/Layout'

function App() {

  return (
    <Layout>
      {/* <Header/> */}
      {/* <PetsList pets={pets}/> */}
      {/* <pre>{JSON.stringify(pets, null, 2) }</pre> */}
    </Layout>
  );
}

export default App;
