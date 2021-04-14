import React from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import DealFour from "../images/dealFour.jpeg";
import ImageOne from "../images/imageOne.png";
import ImageTwo from "../images/imageTwo.png";
import ImageThree from "../images/imageThree.png";
import ImageFour from "../images/imageFour.png";
import ImageFive from "../images/imageFive.png";
import ImageSix from "../images/imageSix.png";
import ImageSeven from "../images/imageSeven.png";
import ImageEight from "../images/imageEight.png";
import ImageNine from "../images/imageNine.png";
import "./ImgComp.css";
import PhoneBanner from "../images/phones.jpg";

const Grocery = [
  {
    id: 1,
    nameOne: "Top Offers",
    price: 25.0,
    imageOne: <img src={ImageOne} width={128} height={128} />,
  },
  {
    id: 2,
    nameTwo: "Grocery",
    price: 25.0,
    imageTwo: <img src={ImageTwo} width={128} height={128} />,
  },
  {
    id: 3,
    nameThree: "Mobiles",
    price: 25.0,
    imageThree: <img src={ImageThree} width={128} height={128} />,
  },
  {
    id: 4,
    nameFour: "Electronics",
    price: 25.0,
    imageFour: <img src={ImageFour} width={128} height={128} />,
  },
  {
    id: 5,
    nameFive: "Home",
    price: 25.0,
    imageFive: <img src={ImageFive} width={128} height={128} />,
  },
  {
    id: 6,
    nameSix: "Appliances",
    price: 25.0,
    imageSix: <img src={ImageSix} width={128} height={128} />,
  },
  {
    id: 8,
    nameSix: "Toys",
    price: 25.0,
    imageSix: <img src={ImageNine} width={128} height={128} />,
  },
  {
    id: 9,
    nameSix: "Travel",
    price: 25.0,
    imageSix: <img src={ImageEight} width={128} height={128} />,
  },
];

function ImgComp({ imageOffers }) {
  return (
    <div className="imageHeader">
      <div className="imageOne">
        {Grocery.map(function (items) {
          return (
            <div className="imageProducts">
              <Link className="imageOneElement" to="/deals">
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
      <div>
        <img src={PhoneBanner} />
      </div>
    </div>
  );
}

export default ImgComp;
