let phraseIndex = Math.floor(Math.random()*19);

setInterval(function(){
  let current = new Date()
  let newYear = new Date(current.getFullYear(), 11, 31, 24, 0, 0, 0)
  let days = ((Math.abs(newYear - current)/(1000 * 3600 * 24)).toFixed(0) >= 10) ? (Math.abs(newYear - current)/(1000 * 3600 * 24)).toFixed(0) : '0'+parseInt(Math.abs(newYear - current)/(1000 * 3600 * 24));
  let hours = ((((Math.abs(newYear - current)/(1000*60*60))%24).toFixed(0) >= 10) ? ((Math.abs(newYear - current)/(1000*60*60))%24).toFixed(0) : '0'+parseInt((Math.abs(newYear - current)/(1000*60*60))%24));
  let minutes = ((((Math.abs(newYear - current)/(1000*60))%60).toFixed(0) >= 10) ? ((Math.abs(newYear - current)/(1000*60))%60).toFixed(0) : '0'+parseInt((Math.abs(newYear - current)/(1000*60))%60));
  let seconds = ((((Math.abs(newYear - current)/(1000))%60).toFixed(0) >= 10) ? ((Math.abs(newYear - current)/(1000))%60).toFixed(0) : '0'+parseInt((Math.abs(newYear - current)/(1000))%60));;
  let zodiac = ['MONKEY','ROOSTER', 'DOG','PIG','RAT', 'OX', 'TIGER', 'RABBIT', 'DRAGON', 'SNAKE', 'HORSE', 'GOAT']
  let phrases = ['Good','Bad','Creative','Active','Powerful','Gustatory','Elaborate','Confusing','Smooth','Enthusiastic','Daring','Enormous','Generous','Humbling','Natural','Inclusive','Challenging','Laughable','Independent']
  if(newYear.getTime() <= current.getTime()){
    message.innerHTML = "HAPPY NEW YEAR!"
    // rat.innerHTML = `Animal: ${zodiac[(current.getFullYear())%12]}`
    countdown.innerHTML = `01:01:${current.getFullYear()}`;

    $('#nymusic')[0].play();
  } else {
    message.innerHTML = `${phrases[phraseIndex]} ${zodiac[(current.getFullYear())%12]} Year ${current.getFullYear()}`
    // rat.innerHTML = ``
    countdown.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  }
  document.getElementById('status').innerHTML = `${current.getFullYear()}`;
},1)
