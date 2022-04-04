function scuberGreetingForFeet(distance) {
  // Write your code here!
  let response;
  if (distance <= 400) { response = 'This one is on me!'}
  else if (distance > 400 && distance <= 2000) { response = 'That will be twenty bucks.'}
  else if (distance > 2000 && distance <= 2500) { response = 'I will gladly take your thirty bucks.'}
  else if (distance > 2500) { response = 'No can do.'};
  return response;
}

function ternaryCheckCity(city){
  // Write your code here!
  let response;
  city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;

  switch (tip) {
    case 'generous' : response = 'Thank you so much.';
    break;
    case 'not as generous' : response = 'Thank you.';
    break;
    case 'thanks for everything' : response = 'Bye.';
    break;
  }

  return response;
}