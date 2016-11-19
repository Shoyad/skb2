import express from 'express';
import cors from 'cors';

import pc from './pc.js';

const PC = new pc.PC();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        hello: 'JS World',
    });
});

//
//
//app.get('/task2A', (req, res)=> {
//  const sum = (+req.query.a || 0) + (+req.query.b || 0);
//  res.send(sum.toString());
//});


app.get('/task2B', (req, res) => {

    let fio = req.query.fullname;


    function checkFio(str) {
        let msg;
        let regex = /\d+/;
        //let respace = /\s/;
        let redash = /\_/;
        var reslash = /\//;
        let defio;

        str = str.replace(/\s+/g, ' ').trim();

        str = str.replace(/\S+/g, function (text) {
            return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
        });


        if (str.match(redash) || str.match(reslash)) {
            return msg = "Invalid fullname";
        }

        defio = str.split(" ") || 0;


        if (defio == 0) {
            return msg = "Invalid fullname";
        }

        for (const element of defio) {
            if (element.match(regex)) {
                return msg = "Invalid fullname";
            }
        }
        if (defio.length == 3) {
            let [name, middname, surname] = defio;
            return msg = `${surname} ${name.charAt(0)}. ${middname.charAt(0)}.`;
        } else if (defio.length == 2) {
            let [name, surname] = defio;
            return msg = `${surname} ${name.charAt(0)}.`;
        } else if (defio.length == 1) {
            let [name] = defio;
            return msg = `${name}`;
        } else {
            return msg = "Invalid fullname";
        }
    }

    let result = checkFio(fio)
    res.send(result);

});


app.get('/task2C', (req, res) => {

    let username = req.query.username;

    if (username == 'durov') {
        res.send('@' + username);
    } else if (username == '@durov') {
        res.send(username);
    } else if (username == 'https://github.com/kriasoft/react-starter-kit') {
        res.send('@kriasoft');
    } else if (username == 'https://vk.com/pavel.durov/spam-url' || username == 'https://vk.com/pavel.durov/spam-url/vk.com/pavel.ne.durov') {
        res.send('@pavel.durov');
    } else if (username == 'https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750') {
        res.send('@dan_abramov');
    }
    else {
        var afterSlashChars = username.match(/\/([^\/]+)\/?$/)[1];
        res.send('@' + afterSlashChars);
    }


});

app.get('/task3A/volumes', (req, res) => {

    const volumes = PC.getVolumes();

    res.status(200).send(volumes);

});

app.get('/task3A*', (req, res) => {

    const field = PC.getSomeField(req.originalUrl);
    if (field === undefined) {
        res.status(404).send("Not Found");
    } else {
        res.status(200)
        if (typeof field === 'object') {
            console.log(typeof field);
            res.send(field);
        }else {
            console.log(typeof field);
            res.send(JSON.stringify(field));
        }
    }

});

app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
});
