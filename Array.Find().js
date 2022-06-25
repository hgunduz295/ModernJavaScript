// Array.Find

const cars = [
  {
    id: 1,
    brand: "Lamborginhi",
    model: "Aventador",
    year: 2021,
  },
  {
    id: 2,
    brand: "Porsche",
    model: "Taycan",
    year: 2021,
  },
  {
    id: 3,
    brand: "BMW",
    model: "760i X-Drive Long",
    year: 2020,
  },
  {
    id: 4,
    brand: "Mercedes Benz",
    model: "Maybach S 650",
    year: 2020,
  },
  {
    id: 5,
    brand: "Chrysler",
    model: "300 C 3.5",
    year: 2005,
  },
];

const bmw = cars.find((car) => car.id > 5);

if(!bmw) console.log("Değer bulunamadı.");

console.log(bmw);