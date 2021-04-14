function mysteryScoping4() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    var x = 'out of block again';
    console.log(x);
  }

mysteryScoping4()

//var var was in block in block
//const const was in block out of block
//const var errored, because var can't be declared if there is a const of the same name in scope
//let let was in block out of block
// let let let was error because the outer let cant overwrite the earlier let (but var var var works just fine)

function madlibs(word1, word2, word3) {
    console.log(`We shall ${word1.toUpperCase()} the ${word2.toUpperCase()} ${word3.toUpperCase()}`);
}

madlibs('make', 'best', 'guac')