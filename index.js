// Code your solution here
const findMatching = (drivers, name) => {
  const pickDrivers = drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
  return pickDrivers;
};

console.log(
  findMatching(
    ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"],
    "Bobby"
  )
);

const fuzzyMatch = (drivers, name) => {
  const pickDrivers = drivers.filter((driver) => driver.startsWith(name));
  return pickDrivers;
};

console.log(
  fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bob"], "Bo")
);

const matchName = (drivers, name) => {
  const pickDrivers = drivers.filter((driver) => driver.name === name);
  return pickDrivers;
};
