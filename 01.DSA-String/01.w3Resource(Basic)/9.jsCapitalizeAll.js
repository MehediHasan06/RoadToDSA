let jsCapitalizeAll = (str) => {
<<<<<<< HEAD
  let capitalizeArr = [];
  str.split(" ").forEach(elem => {
    capitalizeArr.push(elem.charAt(0).toUpperCase() + elem.slice(1));
  });
  return capitalizeArr.join(" ");
};

console.log(jsCapitalizeAll("imma hero here."));
// Imma Hero Here
=======
  let capitalizeStr = [];
  str.split(" ").forEach(elem => {
    capitalizeStr.push(elem.charAt(0).toUpperCase()+elem.slice(1));
  });

  return capitalizeStr.join(" ");
};

console.log(jsCapitalizeAll("imma hero here."));
// Output: Imma Hero Here
>>>>>>> 623de122404719aa5816696aedd9bfdc8585d660
