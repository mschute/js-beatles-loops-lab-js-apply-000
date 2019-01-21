function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++){
   emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}  

function johnLennonFacts(facts){
  var factsArray = [];
  let i = 0
  while(i < facts.length){
    factsArray.push(`${facts[i]}!!!`);
    i++;
  }
  return factsArray
}

function iLoveTheBeatles(number){
  var loveArray = [];
  var statement = 'I love the Beatles!'
  let i = 0
  do {i++; loveArray.push(`${statement[i]}`);}
    while (i < number.length)
  return loveArray
}