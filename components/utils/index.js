import { LABELS } from "./constants";

export function chunkArray(myArray){
  let array = JSON.parse(JSON.stringify(myArray));
  let results = [];
  
  while (array.length) {
    results.push(array.splice(0, 10));
  }
  return results;
}

export function orderArray(myArray, direction){
  let array = JSON.parse(JSON.stringify(myArray));
  let results = [];
  
  if(direction == LABELS.ASCE){
    results = array.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
  } else{
    results = array.sort((a,b) => (a.time < b.time) ? 1 : ((b.time < a.time) ? -1 : 0))
  }
  
  return results;
} 