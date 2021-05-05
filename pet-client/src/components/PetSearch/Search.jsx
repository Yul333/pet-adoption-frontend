

// import SearchBar from '../components/Search/Searchbar'

// import React, { useState, useEffect } from 'react';
// import PetSearch from '../components/Search/PetSearch'


// const Search = (props) => {
//   const [input, setInput] = useState('');
//   const [petsDefault, setPetsDefault] = useState();
//   const [nameList, setNameList] = useState();

//   const fetchData = async () => {
//     return await fetch('http://localhost:5050/api/pets')
//       .then(response => response.json())
//       .then(data => {
//          setNameList(data.pets) 
//          setPetsDefault(data.pets)
//         console.log(data.pets)
//        });}

//   const foundName = async (input) => {
//      const filtered = petsDefault.filter(pet => {
//       return pet.Name.toLowerCase().includes(input.toLowerCase())
//      })
//      setInput(input);
//      setNameList(filtered);
//   }

//   useEffect( () => {fetchData()},[]);
	
//   return (
//     <>
      
//       <SearchBar 
//        input={input} 
//        onChange={foundName}
//       />
//       <PetSearch nameList={nameList}/>
//     </>
//    );
// }


// export default Search