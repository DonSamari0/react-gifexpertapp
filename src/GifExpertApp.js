import React, { useState } from 'react'

import CategoryAdd from './components/CategoryAdd'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    /* const handleAdd = ()=>{
        //setCategories(categories.push('otro'));  no es posible
        //setCategories([...categories, 'One Piece']); 
    } */
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <CategoryAdd setCategories = {setCategories} categories= {categories}/>
                { categories.map((category)=>{
                    return <GifGrid 
                    key = {category}
                    category={category}/>
                    })
                }
        </>
    )
};

export default GifExpertApp;