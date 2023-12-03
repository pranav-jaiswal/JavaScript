/*

    *
   ***
  *****
 *******
*********

*/



function starPattern(numberOfRows) {
    for (var i = 0; i < numberOfRows; i++) {
      var star = '';
      for (var j = -(numberOfRows - 1); j <= (numberOfRows - 1); j++) {
        if (j >= -i && j <= i) {
          star += '*';
        } else {
          star += ' ';
        }
      }
      console.log(star);
    }
  }
  
  starPattern(10);