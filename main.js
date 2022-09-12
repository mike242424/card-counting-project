// Card counting function that accepts cards 2-10, "Jack", "Queen", "King", and "Ace" as inputs
let count = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case "Jack":
    case "Queen":
    case "King":
    case "Ace":
      count--;
      break;
    default:
      console.log(
        'Please choose a card bewteen 2 and 10, or "Jack", "Queen", "King", or "Ace"'
      );
      break;
  }

// Current count logic
  if (count > 0) {
    console.log(`${count} Bet`);
  } else if (count <= 0) {
    console.log(`${count} Hold`);
  }
}

// Testing function
cardCounter(2);
cardCounter(7);
cardCounter("Queen");
cardCounter("Ace");
cardCounter(3);
cardCounter(1);
cardCounter("King");
cardCounter(19);
