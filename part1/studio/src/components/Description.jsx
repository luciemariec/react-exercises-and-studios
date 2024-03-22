import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
const authorLink = "https://www.theppk.com/";
const authorPhoto = "https://www.theppk.com/wp-content/uploads/2019/09/273381BB-7937-4FEB-936F-FD56AB604987-819x1024.jpg";
const authorName = "Isa Chandra Moskowitz";

return (
    <div className={styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt="Isa Chandra Moskowitz" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Post Punk Kitchen</a> 
        </div>
    </div>
);
}
class RecipeDescription extends React.Component {
render() {
    return (
        <div>
            <div>
                <h1>Earl Gray Chai Pancakes</h1>
                <p>These pancakes have it all! Masala chai spices like ginger, cardamom and black pepper. And although I have made chai spiced pancakes before, this time I thought of adding actual tea. Like wow, how brilliant, since “tea” is what chai is. </p>
            </div>
            <RecipeAuthor />
        </div>
    );
}
}

export default RecipeDescription;