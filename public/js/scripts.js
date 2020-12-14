$(document).ready(() => {
  const englishInput = $('#english-input');
  const aurebeshOutput = $('#aurebesh-output');
  const englishQuote = $('#english-quote');
  const aurebeshQuote = $('#aurebesh-quote');

  // translate english to aurebesh
  englishInput.keyup((e) => {
    aurebeshOutput.val(englishInput.val());
  });

  // api call for a random star wars quote
  $.get(
    'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote',
    (data) => {
      // set the quote variable
      const quote = data.starWarsQuote;
      // append the quote to the proper divs
      englishQuote.append(`${quote}`);
      aurebeshQuote.append(`${quote}`);
    }
  );
});
