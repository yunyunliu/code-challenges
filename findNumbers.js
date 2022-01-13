/*
Given a string containing the scrambled characters of several spelled out numerals, identify the scrambled numberals
and return their corresponding digits in ascending order in an array

Example:
input: 'fnineenoour' output: [1,4,9] because you can spell the words 'one', 'four', and 'nine' with the letters of the input
input: 'nfnineennoourie' output: [1,4,9,9] so there could be multiple appearances of the same digit in an input string
input: 'owoftnuoer' output: [1,2,4]
input: 'zesxrionezoreo' output: [0,0,1,6]

when spelled out all even number contain a letter that only appears once (in the words 'zero' through 'nine')
when spelled out all odd numbers consist of letters that also appear in other number words

ex.
spelled out numerals: zero, one, two, three, four, five, six, seven, eight, nine
even numerals: zero (z is unique), two (w is unique), four(u is unique), six(x is unique), eight(g is unique), each unique letter identifies a corresponding even numeral
odd numerals: one, three, five, seven, nine

so if input string contains one of the unique letters, the input must contain the even digit that the unique letter corresponds to
 you can also remove the other letters needed to spell that even numeral from consideration making the list you need to unscramble shorter
ex: if input string includes 'x', you know tha the string also has to contain 'i' and 'x' and that one of the digits in the result is 6.
uses frequency counter pattern
then give identifying letters to odd digits -> one ('o' is unique), three ('h' is unique), five ('f' is unique), seven ('s' is unique), nine ('i')
get frequencies of letters
*/

function findNumbers(str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === 'z') {
      count[0] ? count[0]++ : count[0] = 1;
      // console.log('count[0]', count[0])
    }
    if (letter === 'w') {
      count[2] ? count[2]++ : count[2] = 1;
    }
    if (letter === 'u') {
      count[4] ? count[4]++ : count[4] = 1;
    }
    if (letter === 'x') {
      count[6] ? count[6]++ : count[6] = 1;
    }
    if (letter === 'g') {
      count[8] ? count[8]++ : count[8] = 1;
    }

    if (letter === 'o') {
      count[1] ? count[1]++ : count[1] = 1;
    }
    if (letter === 'h') {
      count[3] ? count[3]++ : count[3] = 1;
    }
    if (letter === 'v') {
      count[5] ? count[5]++ : count[5] = 1;
    }
    if (letter === 's') {
      count[7] ? count[7]++ : count[7] = 1;
    }
    if (letter === 'i') {
      count[9] ? count[9]++ : count[9] = 1;
//  console.log('count[0]', count[0])
    }
  }
  console.log('zesxrionezoreo:', count)
}

findNumbers('zesxrionezoreo')
