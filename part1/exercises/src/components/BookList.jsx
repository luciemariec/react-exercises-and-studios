export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "One Day";
   let book2 = "The Ballad of Songbirds and Snakes";
   let book3 = "Because of Miss Bridgerton";

   return (
   <div>
<h3>{pageTitle}</h3>
<img src={"https://m.media-amazon.com/images/I/411rEm4QjxL._SY445_SX342_.jpg"} alt="One Day by David Nicholls"/>
<img src={"https://m.media-amazon.com/images/I/51qoASMxDzL._SY445_SX342_.jpg"} alt="The Ballad of Songbirds and Snakes by Suzanne Collins"/>
<img src={"https://m.media-amazon.com/images/I/51TMj2v1rnL._SY445_SX342_.jpg"} alt="Because of Miss Bridgerton by Julia Quinn" />
</div>
   
);
}