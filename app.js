import fetch from 'isomorphic-fetch'
import ajax, {ajaxNotInjected} from './js/ajax';

let dispatch = function (message) {
  return function (action) {
    console.log(message, action.response);
  }
};

ajax(fetch)(dispatch('Response from injected: '));
ajaxNotInjected()(dispatch('Response from application global: '));