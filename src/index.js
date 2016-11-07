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


  const fio = req.query.fullname;
  let complete;

  if(req.query.fullname) {

    let fullfio = fio.split(" ")
    let [name, middname, surname] = fullfio;

    if(name.match('/\d+/g')) {
      complete = "Invalid fullname";
    } else {п

      if (fullfio.length == 3) {

        name = name.charAt(0) || "";
        middname = middname.charAt(0) || "";
        surname = surname || "";
        complete = `${surname} ${name}. ${middname}.`;

      } else if (fullfio.length == 2) {
        middname = middname || "";
        name = name.charAt(0) || "";
        complete = `${middname} ${name}.`;

      } else if (fullfio.length == 1) {
        complete = `${name}`
      } else {
        complete = "Invalid fullname";
      }
    }
  }
  else {
    complete = "Invalid fullname";
  }


  //const cofio = defio[2] + " " + defio[0].charAt(0) + ". " + defio[1].charAt(0)+ ".";

  res.send(complete);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
