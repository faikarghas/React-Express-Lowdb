const express       = require('express')
const app           = express();
const bodyParser    = require('body-parser');
const low           = require('lowdb');
const FileSync      = require('lowdb/adapters/FileSync');
const adapter       = new FileSync('data.json');
const db            = low(adapter);
const cors          = require('cors');
const port          = 3027;

app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req,res)=>{
    db.defaults({ data: [] }).write();
    let dataku = db.get('data').value();
    res.send(dataku);
})

app.post('/api', (req,res)=>{
    console.log(req.body);
    db.get('data').push({
        nama    : req.body.nama,
        usia    : req.body.usia
    }).write();
    res.send({
        status  : 'POST Berhasil',
        nama    : req.body.nama,
        usia    : req.body.usia
    }); 
});


app.listen(port, ()=>{
    console.log(`aktif di port ${port}`);
}); 

