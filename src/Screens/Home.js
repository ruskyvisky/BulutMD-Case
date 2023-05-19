import React from 'react';
import "../Styles/styles.css";
import Navbar from '../components/Navbar/navbar';
import Card from '../components/HomePageCards/card';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Card
          cardSubtitle={"Do you want watch Films?"}
          cardTitle={"Films"}
          imageSrc={"images/films.jpg"}
          isRight={false}
        />
        <Card
          cardSubtitle={"Do you want watch Series?"}
          cardTitle={"Series"}
          imageSrc={"images/series.jpg"}
          isRight={true}
        />
      </div>
    </>
  );
}

export default App;