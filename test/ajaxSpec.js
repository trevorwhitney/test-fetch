import ajax, {ajaxNotInjected} from '../js/ajax';

describe('ajax', function () {
  describe('mocking fetch', function () {
    it('passes in fetch', function (done) {
      let promise = Promise.resolve(new Response('{}', {
        headers: 'Content-Type: application/json',
        status: 200}));
      let fetch = jasmine.createSpy('fetch').and.returnValue(promise);
      var dispatch = jasmine.createSpy('dispatch');

      ajax(fetch)(dispatch).then(() => {
        let ajaxAction = {
          type: 'AJAX',
          response: {}
        };
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/trevorwhitney/repos');
        expect(dispatch).toHaveBeenCalledWith(ajaxAction);
        done();
      });
    });
  });
});