var nt = require("net");
var args= process.argv.slice(2);
var connection=new nt.Socket();
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
connection.connect(8080,args[0],function(){
		connection.end(args[1]+"");
		
});
	function onData(data){
		console.log(data.toString());
	}
	function onClose(){
		connection.destroy();
	}
	function onError(data){
		console.log(data);
	}



