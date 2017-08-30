/* eslint-disable func-names */
var assert = require('assert');
var isBrowserSupported = require('.');

describe('isBrowserSupported()', function () {
  var tests = [
    {
      userAgent: 'Mozilla/5.0 (Linux; U; Android 6.0; en-US; iris 870 4G Build/MRA58K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.0.5.850 U3/0.8.0 Mobile Safari/534.30',
      selections: 'and_uc >= 11',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      selections: 'android >= 4',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',
      selections: 'bb >= 6',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      selections: 'chrome >= 40',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2769.0 Mobile Safari/537.36',
      selections: 'and_chr >= 53',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
      selections: 'edge >= 12',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
      selections: 'firefox >= 40',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/49.0',
      selections: 'and_ff >= 49',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))',
      selections: 'ie >= 10',
      expected: false
    },
    {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
      selections: 'ie >= 10',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8X by HTC)',
      selections: 'ie_mob >= 10',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/8.0 Mobile/11A465 Safari/9537.53',
      selections: 'ios_saf >= 8.1',
      expected: false
    },
    {
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/8.0.57838 Mobile/12B410 Safari/600.1.4',
      selections: 'ios_saf >= 8.1',
      expected: true
    },
    {
      userAgent: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
      selections: 'opera >= 9',
      expected: true
    },
    {
      userAgent: 'Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02',
      selections: 'op_mob >= 12',
      expected: true
    },
    {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A',
      selections: 'safari >= 7',
      expected: true
    },
    {
      userAgent: 'Googlebot/2.1 (+http://www.google.com/bot.html)',
      expected: false
    },
    {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      selections: 'iOS >= 10',
      expected: true
    }
  ];

  tests.forEach(function (test) {
    var description =
      JSON.stringify(test.userAgent) +
      (test.expected ? ' matches with ' : ' does not match with ') +
      JSON.stringify(test.selections);

    it(description, function () {
      var actual = isBrowserSupported(test.userAgent, test.selections);
      assert.equal(test.expected, actual);
    });
  });
});
