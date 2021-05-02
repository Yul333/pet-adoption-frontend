import React, { useState, useEffect } from 'react'
import getBreeds from '../../libs/getBreeds';
import Error from './Error';
import '../../layout/CSSPages/search.css';

const initBreeds = [
    {
        id: 1,
        name: "dog1",
    },
    {
        id: 2,
        name: "dog2",
    }
]

const SearchSelect = ({ updateDog }) => {

    const [breeds, setBreeds] = useState(initBreeds);
    const [error, setError] = useState(null);

    useEffect(() => {
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds()
            .then((newBreeds) => {
                setBreeds(newBreeds)
            })
            .catch((error) => {
                console.log(error);
                setError("Error loading Breeds");
            })

    }
    return (
        <>
            <select onChange={(e) => updateDog(e.target.value)}>
                {breeds.map((breed) => (
                    <option value={breed.id} key={breed.id}> 
                    {breed.name}
                  
                    </option>
                ))}
            </select>
            { error && <Error error={error} />}
        </>
    )

}
export default SearchSelect;