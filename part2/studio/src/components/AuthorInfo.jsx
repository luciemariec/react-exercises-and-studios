import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = recipedata.author; // Extract the author's name from the recipe data

  // Variable to return the author's name
  const recipeAuthorName = <div key="author">{recipeAuthor}</div>;

  // Variable to return the author's image
  const recipeAuthorImage = (
    <img
      key="authorImage"
      src={recipedata.authorImage}
      alt={recipeAuthor}
      className="authorImage" // Apply the authorImage class for styling
    />
  );

  // Variable to return the author's website URL
  const recipeWebsite = (
    <a key="website" href={recipedata.website}>
      {recipedata.website}
    </a>
  );

  // Return the author's info including name, image, and URL
  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthorName}
      {recipeWebsite}
    </div>
  );
}
 
 export default AuthorInfo;