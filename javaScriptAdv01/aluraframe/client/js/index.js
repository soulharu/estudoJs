var transacao = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];
 console.log(transacao);


document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  var tr = document.createElement('tr');
  var tbody = document.querySelector('table tbody');

  transacao.forEach(function (campo) {
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = transacao[1].value * transacao[2].value;
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  limpaCampos();
});

function limpaCampos(){
  transacao[0].value = null;
  transacao[1].value = null;
  transacao[2].value = null;
  transacao[0].focus();
}
