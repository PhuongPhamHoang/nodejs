var express = require('express');
var router = express.Router();

var list = [
  {
    name: "phuongph",
    id: 1
  },
  {
    name: "AAA",
    id: 2
  },
  {
    name: "BBBB",
    id: 3
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.status(200)
  res.json(list);


});

// get user id
router.get('/:id', function(req, res, next){
  var id = req.params.id || '';
  // res.send(id);
  res.status(200)
  var item;
  var length = list.length;
  for(var i = 0 ;i< length ; i++){
    var temp = list[i];
    if( id == temp.id){
      res.send("nameUser: " +temp.name);
    }
  }
 // list.pus  >> add list
  res.json(item);
  //console.log("get request GET");
});
//push user
router.post('/addUser', function(req, res, next){
  res.status(200);
 // console.log('php'+req.body.id);
  res.json(list.push(req.body));

});

//delete id
router.delete('/:id', function(req, res, next){
  res.status(200);
  var item;
  var id = req.params.id || '';
  //console.log('fsfsfa'+id);
  var length = list.length;
  //console.log(length);
  for(var i = 0 ;i< length;i++){
    var temp = list[i];
    if(id == temp.id){
      delete list[i];
    }

  }
  res.json(item);
});

//update user id
router.post('/:id', function(req, res){
   res.status(200);
  var item;
  var id = req.params.id ||'';
  var length = list.length;
  for(var i = 0 ;i<length ; i++){
    var temp = list[i];
    if(id == temp.id){
      console.log('value : '+req.body.name);
      list[i].name = req.body.name;
    }
  }
  res.json(item);
});

module.exports = router;
