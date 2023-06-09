import I1 from "../assets/i1.png";
import F1 from "../assets/f1.png";
import C3 from "../assets/c3.png";
import Fi1 from "../assets/fi1.png";
import { m } from "framer-motion";

export const imageData = [
  {
    id: 1,
    name: "Icecream",
    description: "chocolate & vanilla",
    price: 5.25,
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    description: "fresh strawberries",
    price: 10.25,
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken kebab",
    description: "mixed kebab plate",
    price: 8.25,
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish kebab",
    description: "mixed fish kebab",
    price: 7.25,
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },

  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },

  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },

  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },

  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },

  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft drinks",
    urlParamName: "drinks",
  },

  {
    id: 8,
    name: "Vegetables",
    urlParamName: "veggies",
  },
];
