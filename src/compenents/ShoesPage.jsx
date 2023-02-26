import React, { useState, useEffect } from "react";
import Card from "./card";
import "./components.css";
import CardPage from "./CardPage";

function ShoesPage() {
  const [shoesData, setShoesData] = useState(() => {
    const data = localStorage.getItem("shoesData");
    return data ? JSON.parse(data) : [];
  });
  const [selectedShoe, setSelectedShoe] = useState(null);

  useEffect(() => {
    fetch("https://63f75b7ae40e087c958cdca4.mockapi.io/shoes")
      .then((response) => response.json())
      .then((data) => {
        setShoesData(data);
        localStorage.setItem("shoesData", JSON.stringify(data));
      })
      .catch((error) => console.error(error));
  }, []);

  function handleClick(shoe) {
    setSelectedShoe(shoe);
  }

  return (
    <>
      <div className="cards-container">
        {shoesData.map((shoe) => (
          <Card
            key={shoe.id}
            name={shoe.Name}
            price={shoe.price}
            url={shoe.Img}
            onClick={() => handleClick(shoe)}
          />
        ))}
      </div>
      {selectedShoe && <CardPage shoe={selectedShoe} />}
    </>
  );
}

export default ShoesPage;
