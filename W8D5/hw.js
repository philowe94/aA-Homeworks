

window.setTimeout(function () {
    alert('HAMMERTIME');
}, 5000);

//settimeout is async

function hammerTime(time){
    window.setTimeout(function() {
        alert(`${time} is hammertime!`);
    });
};

function teaAndBiscuits () {
    let first, second;
  
    reader.question('Would you like some tea?', (res) => {
      first = res;
      console.log(`You replied ${res}.`);
    });
  
    reader.question('Would you like some biscuits?', (res) => {
      second = res;
      console.log(`You replied ${res}.`);
    });
  
    const firstRes = (first === 'yes') ? 'do' : 'don\'t';
    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();
  }