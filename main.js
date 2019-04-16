const app = (() => {

  function getImageName(country) {

   country  = country.toLowerCase();
var promiseOfImageName  = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if  (country  === 'spain' ||  country === 'chile' ||  country === 'peru') {
            resolve(country + '.png');
        } else  {
            reject(Error('Didn\'t receive a valid country name!'));
        }
    },  1000);
});
console.log(promiseOfImageName);
return  promiseOfImageName;
return  getImageName(country)
.then(logSuccess)
.then(undefined,  logError);

  }

  function isSpain(country) {

    // Optional - create and return a promise that resolves if input is "Spain"

  }

  function flagChain(country) {

return  getImageName(country)
.then(fetchFlag)
.then(processFlag)
.then(appendFlag)
.catch(logError);

  function allFlags(promiseList) {

 var  promises  = [
    getImageName('Spain'),
    getImageName('Chile'),
    getImageName('Peru')
];
allFlags(promises).then(function(result)  {
    console.log(result);
});

  }


  // call the allFlags function


var promise1  = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500,  'one');
});
var promise2  = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100,  'two');
});
Promise.race([promise1, promise2])
.then(logSuccess)
.catch(logError);


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnFalse() {
    return false;
  }

  function fetchFlag(imageName) {
    return fetch('flags/' + imageName); // fetch returns a promise
  }

  function processFlag(flagResponse) {
    if (!flagResponse.ok) {
      throw Error('Bad response for flag request!'); // This will implicitly reject
    }
    return flagResponse.blob(); // blob() returns a promise
  }

  function appendFlag(flagBlob) {
    const flagImage = document.createElement('img');
    const flagDataURL = URL.createObjectURL(flagBlob);
    flagImage.src = flagDataURL;
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(flagImage);
    imgContainer.style.visibility = 'visible';
  }

  function fallbackName() {
    return 'chile.png';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    flagChain: (flagChain),
    isSpain: (isSpain),
    fetchFlag: (fetchFlag),
    processFlag: (processFlag),
    appendFlag: (appendFlag),
    allFlags: (allFlags)
  };

})();
