class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    const forbidden = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = string.split(' ');
    let finalString = "";

    newString.forEach(function (word, index) {
      if(index === 0) {
        finalString += word.charAt(0).toUpperCase() + word.slice(1) + " ";
      }

      else if(!forbidden.includes(word)) {
        finalString += word.charAt(0).toUpperCase() + word.slice(1) + " ";
      } else {
        finalString += word + " ";
      }
    });

    return finalString.slice(0, -1);
  }
}