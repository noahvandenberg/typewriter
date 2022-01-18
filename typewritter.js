const sentence = "hello there from lighthouse labs";

let delay = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    //console.log(delay)
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  },delay)
  //console.log(sentence[i])
  delay += 50;
}