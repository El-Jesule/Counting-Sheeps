let list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
let list2 = [false, false, false];

function countSheeps(list) {
  let sheeps = 0;
  for (let animals of list) {
    if (animals === true) {
      sheeps++;
    }
  }
  if (sheeps>0) {
    console.log(`There are ${sheeps} sheep in total.`);
  } else {
    console.log("UPS!!! Wolfs eaten sheeps.");
  }
}
countSheeps(list1);
countSheeps(list2);