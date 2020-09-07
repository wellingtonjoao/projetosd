//método
var getJSON = function (url, sucesso, erro) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.responseType = "json";
    httpRequest.addEventListener("readystatechange", function (event) {
      if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
          if (sucesso) sucesso(httpRequest.response);
        } else {
          if (erro) erro(httpRequest.status, httpRequest.statusText);
        }
      }
    });

    httpRequest.send();
  }

//para chamar o método, faça o seguinte
getJSON('api.json', function (data) {
      var view = "<ul>\n";
      for (var i in data) {
         view += '<li>CEP: '+data[i].cep+'<li>\
                  <li>LOGRADOURO: '+data[i].logradouro+'<li>\
                  <li>COMPLEMENTO: '+data[i].complemento+'<li>';
      }
        view += "\n</ul>";
         /* procura o elemento através da sua id
            e imprime o conteúdo */
         document.getElementById('view').innerHTML = view;

   }, function (errorCode, errorText) {
      console.log('Código: ' + errorCode);
      console.log('Mensagem de erro: ' + errorText);
});