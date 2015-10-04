import ajax from './js/ajax';

ajax()
  .then(resp => resp.json())
  .then(parsedJson => console.log(parsedJson));