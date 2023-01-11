// ONLOAD STARTING FUNCTION ---------------------

function start() {
  console.log('STARTED!!!!!');
  let openingMsg = document.createElement('div');
  openingMsg.innerHTML = "Hello how can I help you?";
  openingMsg.setAttribute("class", "left");

  document.querySelector('#msg_area').appendChild(openingMsg);
}



document.querySelector('.send').addEventListener('click', async (e) => {
  e.preventDefault();
  let req = document.querySelector('.text').value

  function getJSONData() {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://www.botlibre.com/rest/json/chat', true);
    request.setRequestHeader('Content-Type', 'application/json');

    let jsonData = {
      application: "1557311259523772382",
      instance: "45044938",
      message: req
    }

    let json = JSON.stringify(jsonData)

    request.onreadystatechange = function() {
      // exampleResult.setValue(request.responseText, -1);
      botRes = request.responseText
      console.log(botRes);
    };

console.log(request.readyState);
    request.send(json)
  };
  getJSONData();

  if (req === undefined || req === '') {
    console.log('not a valid request');
  } else {
    console.log(req);

    let msg_req = document.createElement('div');
    let msg_res = document.createElement('div');

    let msgCon1 = document.createElement('div');
    let msgCon2 = document.createElement('div');

    msgCon1.setAttribute("class", "msgCon1")
    msgCon2.setAttribute("class", "msgCon2")

    msg_req.innerHTML = req;
    // msg_res.innerHTML = botRes;

    msg_req.setAttribute("class", "right");
    msg_res.setAttribute("class", "left");

    let message = document.querySelector('#msg_area');
    message.appendChild(msgCon1);
    message.appendChild(msgCon2);

    msgCon1.appendChild(msg_req);
    msgCon2.appendChild(msg_res);
  }
});
