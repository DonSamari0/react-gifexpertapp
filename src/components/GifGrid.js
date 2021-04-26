import React from 'react';
import PropTypes from 'prop-types'
import GifDisplay from '../components/GifDisplay';
import useFetchGifs from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs( category );
    return (
        <>
            <h2> { category } </h2>
            {loading && <p>Cargando</p>}
            <div className="card-grid">
                {
                    images.map(  ( img /*{id, title, url}*/  ) => (
                                //<li key= {id}>{title}</li>
                        <GifDisplay 
                            key={img.id}
                            // alt={title} url={url} 
                            {...img}    />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;

GifGrid.propType = {
    category: PropTypes.func.isRequired
}