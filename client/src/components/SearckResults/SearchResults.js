// import React from "react";
// import SaveBtn from "../SaveBtn";
// import { List, ListItem } from "../List";
// import DeleteBtn from "../DeleteBtn";

// function SearchResult({ props }) {
//   return (
//     {this.state.search?
//         <List>
//         {this.state.search.map(result => (
//         <ListItem key={result.id}>
//         <a href={result.volumeInfo.infoLink} alt="searchResult" target="_blank" rel="noopener noreferrer">
//         {result.volumeInfo.title}
//         <span><br /></span>
//         by {result.volumeInfo.authors ? result.volumeInfo.authors[0]: "No Author Available"}
//         </a>
//         <SaveBtn onClick={() => this.saveBook(result.volumeInfo.title, result.volumeInfo.authors, result.volumeInfo.description, result.volumeInfo.imageLinks.thumbnail, result.volumeInfo.infoLink)} />
//         </ListItem>
//         ))}
//         </List>
//         : <h3>No results found</h3>}
//   )
// }

// export default SearchResult;