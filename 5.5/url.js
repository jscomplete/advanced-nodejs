const url = require('url');

const urlString =
  'https://www.pluralsight.com/search?q=buna';

console.log(
  url.parse(urlString, true)
);

const urlObject = {
  protocol: 'https',
  host: 'www.pluralsight.com',
  search: '?q=buna',
  pathname: '/search',
};

console.log(
  url.format(urlObject)
);
