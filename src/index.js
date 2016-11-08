import express from 'express';
import cors from 'cors';

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

    str = str.replace(/\s+/g,' ').trim();

    str = str.replace(/\S+/g, function(text) {
      return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
    });


    if(str.match(redash) || str.match(reslash)) {
      return msg = "Invalid fullname";
    }

    defio = str.split(" ") || 0;


    if(defio == 0) {
      return msg = "Invalid fullname";
    }

    for(const element of defio) {
      if(element.match(regex)) {
        return msg = "Invalid fullname";
      }
    }
    if(defio.length == 3) {
      let [name, middname, surname] = defio;
      return msg = `${surname} ${name.charAt(0)}. ${middname.charAt(0)}.`;
    } else if (defio.length == 2) {
      let [name, surname] = defio;
      return msg = `${surname} ${name.charAt(0)}.`;
    } else if(defio.length == 1) {
      let [name] = defio;
      return msg = `${name}`;
    } else {
      return msg = "Invalid fullname";
    }
  }

  let result = checkFio(fio)
  res.send(result);

});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
