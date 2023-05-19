export const sortByOldest = (data) => {
    return data.sort((a, b) => a.releaseYear - b.releaseYear);
  };
  
  export const sortByNewest = (data) => {
    return data.sort((a, b) => b.releaseYear - a.releaseYear);
  };
  
  export const sortByRandom = (data) => {
    return data.sort(() => Math.random() - 0.5);
  };