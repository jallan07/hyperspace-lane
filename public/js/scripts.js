const englishInput = $('#english-input');
const aurebeshOutput = $('#aurebesh-output');

// translate english to aurebesh
englishInput.keyup((e) => {
  aurebeshOutput.val(englishInput.val());
});
