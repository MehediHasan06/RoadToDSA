let nameAbbreviator = (name) => {
  let updatedName = name.split(" ")[0] + " " + name.split(" ")[1].slice(0,1) + ".";
  return updatedName;
};

console.log(nameAbbreviator("Mehedi Hasan"));
