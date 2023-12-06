import fs from 'fs';

function getAnswer(file) {
  //console.log('*---------------------* \n' + fs.readFileSync(file, 'utf-8') + '\n*---------------------*');

  // Get file lines
  const lines = fs.readFileSync(file, 'utf-8').split('\n');
  //console.log('Lines: ', lines);

  // Go though every value in the line
  const values = lines.map(line => {
    // Get the first number in the line
    let first = line.split('').find(v => !Number.isNaN(Number(v)));

    // Get the last number in the line
    let last = [...line].reverse().find(v => !Number.isNaN(Number(v)));

    //console.log(first + last);

    // Combine the fisrt and last number found
    return Number(first + last);
  });
  console.log('Numbers: ', values);

  // Sum every number
  return values.reduce((s, v) => s + v);
}

console.log(getAnswer('./input.txt'));
