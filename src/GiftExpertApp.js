import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GiftExpertApp = () => {

   // const categories = ['One Punch', 'Samuray X', 'Dragon Ball']

   const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

    // handleAdd
    // const handleAdd = () => {
    //     setCategories([...categories, 'Nueva categoria']);
    // }

    return (
            <>
                <h2>GiftExpertApp</h2>
                <hr/>

                {/* Cada vez que se digita una categoria se cargan las imagenes nuevas */}
                <AddCategory setCategories={ setCategories } />

                {/* 1. Se recorren cada una de las categorias
                2. Para cada categoria se llama al componente GifGrid que busca las imagenes para cada categoria */}
                <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
                </ol>

            </>
        )
}


export default GiftExpertApp;