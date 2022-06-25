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
  const cars2021 = cars.filter((car) => car.id !== 4);

console.log(cars2021);
