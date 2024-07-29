class Vehicle {
  constructor(color = "blue", numberOfWheels = 4, horn = "beep beep") {
    this.color = color;
    this.numberOfWheels = numberOfWheels;
    this.horn = horn;
  }
  honkHorn() {
    console.log(this.horn);
  }
}

export default Vehicle
