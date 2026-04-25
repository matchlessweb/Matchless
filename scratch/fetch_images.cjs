const https = require('https');

const urls = [
  'https://matchlessweb.com/work/make-em-count/',
  'https://matchlessweb.com/work/madison-ridgeland-animal-hospital/',
  'https://matchlessweb.com/work/the-redeemed-marriage-podcast/'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`\n--- Images for ${url} ---`);
      const regex = /<img[^>]+src="([^">]+)"/g;
      let match;
      const images = new Set();
      while ((match = regex.exec(data)) !== null) {
        if (match[1].includes('wp-content/uploads')) {
          images.add(match[1]);
        }
      }
      images.forEach(img => console.log(img));
    });
  });
});
