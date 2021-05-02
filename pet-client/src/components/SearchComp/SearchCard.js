import React from 'react';
import Loader from '../Loader';

const SearchCard = ({dog, loading, updateDog} ) => {

        if(loading ) return <Loader />

    return (
        <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
            <img 
                src={dog.images}
                alt="dog"
                />
            <p>
                {dog.breed.name}
                
            </p>
        </div>
        
    )
}

export default SearchCard;  