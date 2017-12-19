const SHA256 = require('crypto-js/sha256');
const express = require("express");

const app = express();

server =require('http').createServer(app);
var io = require("socket.io")(server);


app.use(function (req, res, next) {
  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      // Pass to next layer of middleware
      next();
  });

class Block {
  constructor(index, timestamp, data, previousHash ='') {
    this.index =index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = "";
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

  class Blockchain{
    constructor(){
      this.chain =[this.createGenesisBlock()];
    }

    createGenesisBlock (){
      return new Block(0,"01/01/2017","Genesis block","0");
    }

    getLatestBlock(){
      return this.chain[this.chain.length -1];
    }

    addBlock(newBlock){
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
        }

      isChainValid(){
        for (let i=1; i<this.chain.length; i++){
          const currentBlock = this.chain[i];
          const previousBlock = this.chain[i-1];
          if(currentBlock.hash !== currentBlock.calculateHash()){
            return false;
          }
          if(currentBlock.previousHash !== previousBlock.hash){
            return false;
          }

      }
      return true;
    }

}

let abc = new Blockchain();
// abc.addBlock(new Block (1,"10/7/2017",{amount:4}));
// abc.addBlock(new Block (2,"12/7/2017",{amount:10}));

console.log('Is chain valid?' + abc.isChainValid());
// abc.chain[1].data = {amount: 100};
console.log('Is chain valid?' + abc.isChainValid());

app.get('/chain',function(req,res){
  
  var chain = JSON.stringify(abc,null,4);
  console.log(chain);
  res.send(chain);
  
});

app.get('/add',function(req,res){
  
  var amt = Math.random()*20;
  amt= Math.floor(amt);
  abc.addBlock(new Block (1,"10/7/2017",{amount:amt}));
  var chain = JSON.stringify(abc,null,4);
  chain= "<h1>New chain added with amount "+amt+"</h1>"+chain;
  res.send(chain);
  console.log("aded chain with amount "+amt+" , date 10/7/2017");  
  
});


app.get('/', function(req, res) {
  res.sendfile('app/index.html');
});


app.listen(3001,()=> console.log("on port 3001!!"));

//socket io setup
io.on('connection', function(socket) {
  'use strict';
  console.log(socket.id + ' connected');
  socket.on('disconnect', function() {
      console.log(socket.id + ' disconnected');
  });
});

// io.broadcast = function(event, message) {
//   'use strict';

//   _io.emit(event, message);
// };