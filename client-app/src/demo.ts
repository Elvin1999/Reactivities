let data = 42;
data = 10;
export interface ICar {
  color: string;
  model: string;
  topSpeed?:number
}
const car1: ICar = {
  color: "Red",
  model:'Bmw'
};
const car2:ICar={
    color:'Yellow',
    model:'Mercedes',
    topSpeed:100
}
export const cars=[car1,car2];
