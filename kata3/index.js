function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf('wolf');
  
  if( wolfIndex === queue.length - 1) {
return "Pls go away and stop eating my sheep";
  }
  
  const sheepIndex = queue.length - wolfIndex - 1;
  
return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}
