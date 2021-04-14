import React from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import DealFour from "../images/dealFour.jpeg";
import OfferOne from "../images/offerOne.jpeg";
import OfferTwo from "../images/offerTwo.jpeg";
import OfferThree from "../images/offerThree.jpeg";
import OfferFour from "../images/offerFour.jpeg";
import OfferFive from "../images/offerFive.jpeg";
import OfferSix from "../images/offerSix.jpeg";
import OfferSeven from "../images/offerSeven.jpeg";
import OfferEight from "../images/offerEight.jpeg";
import "./DealsOfTheDay.css";

const Grocery = [
  {
    id: 1,
    nameOne: "Sports Shoes",
    price: 25.0,
    imageOne: <img src={OfferOne} width={150} height={108} />,
  },
  {
    id: 2,
    nameTwo: "Tripod",
    price: 25.0,
    imageTwo: <img src={OfferTwo} width={123} height={150} />,
  },
  {
    id: 3,
    nameThree: "Computer table",
    price: 25.0,
    imageThree: <img src={OfferThree} width={150} height={150} />,
  },
  {
    id: 4,
    nameFour: "Analog Watch",
    price: 25.0,
    imageFour: <img src={OfferFour} width={109} height={150} />,
  },
  {
    id: 5,
    nameFive: "Swing Machine",
    price: 25.0,
    imageFive: <img src={OfferFive} width={150} height={129} />,
  },
  {
    id: 6,
    nameSix: "Mic",
    price: 25.0,
    imageSix: <img src={OfferSix} width={150} height={150} />,
  },
  {
    id: 8,
    nameSix: "Blinder",
    price: 25.0,
    imageSix: <img src={OfferSeven} width={150} height={95} />,
  },
  {
    id: 9,
    nameSix: "Aviator",
    price: 25.0,
    imageSix: <img src={OfferEight} width={125} height={150} />,
  },
];

function DealsOfTheDay({ imageOffers }) {
  return (
    <div className="imageHeader">
      <div className="imageOne">
        {Grocery.map(function (items) {
          return (
            <div className="imageProducts">
              <Link className="imageOneElement" to="/shoe">
                {items.imageOne}
                <h3>{items.nameOne}</h3>
              </Link>
              <Link to="/product">
                {items.imageTwo}
                <h3>{items.nameTwo}</h3>
              </Link>
              <Link to="/product">
                {items.imageThree}
                <h3>{items.nameThree}</h3>
              </Link>
              <Link to="/product">
                {items.imageFour}
                <h3>{items.nameFour}</h3>
              </Link>
              <Link to="/product">
                {items.imageFive}
                <h3>{items.nameFive}</h3>
              </Link>
              <Link to="/product">
                {items.imageSix}
                <h3>{items.nameSix}</h3>
              </Link>
              <Link to="/product">
                {items.imageSeven}
                <h3>{items.nameSeven}</h3>
              </Link>
              <Link to="/product">
                {items.imageEight}
                <h3>{items.nameEight}</h3>
              </Link>
              <Link to="/product">
                {items.imageNine}
                <h3>{items.nameNine}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DealsOfTheDay;
