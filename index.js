const express = require('express');
const app = express();
const path = require('path');

//app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: path.join(__dirname, 'public')});
// })

app.get('/', (req, res) => {
    res.render('index');
})

//app.listen(process.env.PORT || 3000);
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});

module.exports = app;