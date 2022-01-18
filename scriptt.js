const inputBrand = document.getElementById("brand")
const inputModel = document.getElementById("model")
const inputYear = document.getElementById("year")
const inputMotorPower = document.getElementById("power")
const inputPrice = document.getElementById("price")

class Car {
    constructor(brand, model, year, motorPower, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.motorPower = motorPower;
        this.price = price;

    }
}

let carData = [];
function createData() {
    const newObj = new Car(inputBrand.value, inputModel.value, inputYear.value, inputMotorPower.value, inputPrice.value);
    carData.push(newObj);
    inputBrand.value = ""
    inputModel.value = ""
    inputYear.value = ""
    inputMotorPower.value = ""
    inputPrice.value = ""
    showItems()

}

let date = new Date();
function showItems() {
    if (carData.length > 0) {

        let x = ``
        for (let i = 0; i < carData.length; i++) {

            x = `
            <tr class="table-car-1">
                        <th class="table-success">${carData[i].brand}</th>
                        <th class="table-success">${carData[i].model}</th>
                        <th  class="table-success">${date.getFullYear() - carData[i].modelYear}</th>
                        <th class="table-success">${carData[i].price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} TL</th>

                    </tr>`

                }
                tbody.insertAdjacentHTML("beforeend",x)
            }
        }