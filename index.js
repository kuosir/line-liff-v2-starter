const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    console.log('myLiffId : %s',myLiffId);
    console.log('func : %s',req.query.func);
    res.json({id: myLiffId, func: req.query.func});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
