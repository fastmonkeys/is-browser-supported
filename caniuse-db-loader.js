module.exports = function loader(source) {
  var data;
  if (this.cacheable) {
    this.cacheable();
  }
  data = JSON.parse(source);
  return JSON.stringify({ agents: data.agents });
};
