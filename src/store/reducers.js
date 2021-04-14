import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./actions";
import OfferOne from "../images/offerOne.jpeg";
import OfferTwo from "../images/offerTwo.jpeg";
import OfferThree from "../images/offerThree.jpeg";
import OfferFour from "../images/offerFour.jpeg";
import OfferFive from "../images/offerFive.jpeg";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Sports Shoes",
      price: 29.99,
      rating: 5,
      imageOne: <img src={OfferOne} width={150} height={108} />,
    },
    {
      id: "p2",
      title: "Tripod",
      price: 9.99,
      rating: 5,
      imageOne: <img src={OfferTwo} width={123} height={150} />,
    },
    {
      id: "p3",
      title: "Computer table",
      price: 0.99,
      rating: 5,
      imageOne: <img src={OfferThree} width={150} height={150} />,
    },
    {
      id: "p4",
      title: "Analog Watch",
      price: 2.99,
      rating: 5,
      imageOne: <img src={OfferFour} width={109} height={150} />,
    },
    {
      id: "p5",
      title: " Swing Machine",
      price: 5.99,
      rating: 5,
      imageOne: <img src={OfferFive} width={150} height={129} />,
    },
  ],
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
