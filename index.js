function writeCards(names, event) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

function countDown(num) {
  for(let i = num; i >= 0; i--) {
    console.log(i)
  }
}