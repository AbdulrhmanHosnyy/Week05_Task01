import Vehicle from "./vehicle.js";
import Bicycle from "./Bicycle.js";

const defaultVehicle = new Vehicle();
defaultVehicle.honkHorn(); // Output: beep beep
console.log(defaultVehicle);

const defaultBicycle = new Bicycle();
defaultBicycle.honkHorn(); // Output: honk honk
console.log(defaultBicycle);

const customBicycle = new Bicycle("green", 2, "ring ring");
customBicycle.honkHorn(); // Output: ring ring
console.log(customBicycle);

console.log("Hello");