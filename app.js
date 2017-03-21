var Cosmic = require('cosmicjs');

const bucket = { slug: 'easy-browser' }
const object = { slug: 'home' }

Cosmic.getObject({ bucket}, object, (err, res) => {
    var object = res.object
    document.getElementById('title').innerHTML = object.title
    document.getElementById('content').innerHTML = object.content
    document.getElementById('metafields').innerHTML = '<pre>' + JSON.stringify(object.metafields, null, 2) + '</pre>'
})
