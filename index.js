var browserslist = require('browserslist');
var useragent = require('useragent');

function getBrowserName(family) {
  var browserNames = {
    'BlackBerry WebKit': 'bb',
    'Chrome Mobile': 'and_chr',
    'Firefox Mobile': 'and_ff',
    'IE Mobile': 'ie_mob',
    'Mobile Safari': 'ios_saf',
    'Opera Mobile': 'op_mob',
    'Samsung Internet': 'samsung',
    'UC Browser': 'and_uc'
  };
  return browserNames[family] || family;
}

function getBrowserVersionFromUserAgent(userAgent) {
  var agent = useragent.parse(userAgent);
  var version = [agent.major, agent.minor, agent.patch];
  var browserName = getBrowserName(agent.family);
  while (version.length > 0) {
    try {
      return browserslist(browserName + ' ' + version.join('.'))[0];
    } catch (e) {
      // Ignore unknown browser query error
    }
    version.pop();
  }
  return 'unknown';
}

module.exports = function isBrowserSupported(userAgent, selections) {
  var browsersSupported = browserslist(selections);
  var browser = getBrowserVersionFromUserAgent(userAgent);
  return browsersSupported.indexOf(browser) !== -1;
};
