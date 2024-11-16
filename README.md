## Example 
```code
const himu = require('all-dl-404');

himu.alldown('url')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error downloading:', error);
  });
```
