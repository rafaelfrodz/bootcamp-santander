let animals = ["eagle", "osprey", "salmon" ];

let key = animal => animal === "salmon";

if(animals.filter(key)){
  console.log("swim");
}