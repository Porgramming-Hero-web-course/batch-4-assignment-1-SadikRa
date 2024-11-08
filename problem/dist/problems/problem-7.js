"use strict";
{
    ///Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const presentYear = new Date().getFullYear();
            return presentYear - this.year;
        }
    }
    // take a look
    //   const car = new Car("Honda", "Civic", 2018);
    //   console.log(car.getCarAge());
    ///
}
