let stringParameterizer= (str) => {
  return str.replace(/\s/gi,"-").toLowerCase();
};

console.log(stringParameterizer("Mehedi Hasan from Dhaka"));
