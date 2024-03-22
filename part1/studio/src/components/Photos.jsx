import React from 'react';
import styles from './Description.module.css'; 

function RecipePhoto() {
    const recipePhotoUrl = "https://www.theppk.com/wp-content/uploads/2021/01/ChaiPancake-copy-1.jpg"; 
    return (
        <img src={recipePhotoUrl} alt="earl gray chai pancakes" className={styles.imageUpdates} />
    );
}

export default RecipePhoto;