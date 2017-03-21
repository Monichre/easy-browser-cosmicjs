var Cosmic = require('cosmicjs');

const bucket = { slug: 'blog-attempt' }
const object = { slug: 'sample-blog-post' }

Cosmic.getObject({ bucket}, object, (err, res) => {
    var object = res.object
    document.getElementById('title').innerHTML = object.title
    document.getElementById('content').innerHTML = object.content

})
