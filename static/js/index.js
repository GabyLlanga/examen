//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
    sensores=open('valorsensor.txt','r')
    valorSensores=sensores.readlines()
    for valor in valorSensores:
    print(valor.replace('/n',''))
    def leerSensor1():
    return random.randint(1,10)
    def leerSensor2():
    return random.randint(100,125)
    sensorDoc=open('valorsensor.txt','w')
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor1").innerHTML=leerSensor1;
  document.getElementById("sensor2").innerHTML=leerSensor2;
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "gabyllanga-15@outlook.com/t1";
    	client.send(message);
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "gabyllanga-15@outlook.com/t1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "gabyllanga-15@outlook.com",
    password: "gabyllanga",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("gabyllanga-15@outlook.com/t2");
    message = new Paho.MQTT.Message("hola");
    message.destinationName = "gabyllanga-15@outlook.com/t1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	 // document.getElementById("sensor").innerHTML=message.payloadString;
	  var hola = message.payloadString.split("-");
	  document.getElementById("sensor").innerHTML=hola[0];
	  document.getElementById("sensor1").innerHTML=hola[1];
	  
	
  }

