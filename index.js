var browserslist = require('browserslist');
var parser = require('ua-parser-js');

function getBrowserName(agent) {
  if (agent.browser.name === 'Android Browser') {
    return 'android';
  } else if (agent.os.name === 'BlackBerry') {
    return 'bb';
  } else if (agent.browser.name === 'Chrome' && agent.os.name === 'Android') {
    return 'and_chr';
  } else if (agent.browser.name === 'Firefox' && agent.os.name === 'Android') {
    return 'and_ff';
  } else if (agent.browser.name === 'IEMobile') {
    return 'ie_mob';
  } else if (agent.browser.name === 'Opera Mobi') {
    return 'op_mob';
  } else if (agent.browser.name === 'Safari' && agent.os.name === 'iOS') {
    return 'ios_saf';
  } else if (agent.browser.name === 'UCBrowser') {
    return 'and_uc';
  }
  return agent.browser.name;
}

function getBrowserVersionFromUserAgent(userAgent) {
  var agent = parser(userAgent);
  var version = (agent.browser.version || agent.os.version || '').split('.');
  var browserName = getBrowserName(agent);
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
