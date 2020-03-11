import React from "react";
import { ICar } from "./demo";
interface IProps {
  car: ICar;
}
export const CarItem: React.FC<IProps> = ({car}) => {
  return (
    <div>
      <h1>Model : {car.model}</h1>
      <h2>Color : {car.color}</h2>
    </div>
  );
};
