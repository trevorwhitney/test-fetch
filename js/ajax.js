import fetch from 'isomorphic-fetch'

function ajaxAction(response) {
  return {
    type: 'AJAX',
    response: response
  }
}

export function ajaxNotInjected() {
  return dispatch => {
    return fetch('https://api.github.com/users/trevorwhitney/repos')
      .then(resp => resp.json())
      .then(parsedResponse => dispatch(ajaxAction(parsedResponse)));
  }
}

export default function (injectedFetch) {
  return dispatch => {
    return injectedFetch('https://api.github.com/users/trevorwhitney/repos')
      .then(resp => resp.json())
      .then(parsedResponse => dispatch(ajaxAction(parsedResponse)));
  }
}