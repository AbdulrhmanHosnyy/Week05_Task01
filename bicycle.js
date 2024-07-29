import Vehicle from "./vehicle.js";

class Bicycle extends Vehicle {
  constructor(color = "blue", numberOfWheels = 2, horn = "honk honk") {
    super(color, numberOfWheels, horn);
  }
}

export default Bicycle