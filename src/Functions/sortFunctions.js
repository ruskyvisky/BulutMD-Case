export const sortByOldest = (data) => {
    return data.sort((Content1, Content2) => Content1.releaseYear - Content2.releaseYear); // Content1 and Content2 comparing the releaseYear of the two objects
  };
  
  export const sortByNewest = (data) => {
    return data.sort((Content1, Content2) => Content2.releaseYear - Content1.releaseYear); // Content1 and Content2 comparing the releaseYear of the two objects
  };
  
  export const sortByRandom = (data) => {
    return data.sort(() => Math.random() - 0.5); // Randomized the order of the objects
  };