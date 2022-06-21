const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function onLoad() {
  const value = decodeURI(window.location.href.split('?q=')[1]);
  $.ajax({
    url: TMDB_ENDPOINT_BASE + `/movie/${value}?language=pt-BR`,
    data: {
      api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    }
  }).done(function (data) {
    let texto = '';
    
    for (i = 0; i < 1; i++) {
      imagem = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
      titulo = data.original_title;
      descricao = data.overview;
      date = data.release_date;
      aval = data.vote_average;
      duracao = data.runtime;
      texto += `<div class="d-flex justify-content-center"><div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${imagem}" alt="Cartaz Filme">
                  <div class="card-body">
                  <h5 class="card-title"><b>${titulo}</b></h5> 
                  <p class="card-text">${descricao}</p>
                  <p class="card-aval"><b>Avaliação:</b> ${aval}</p>
                  <p class="card-duracao"><b>Duração:</b> ${duracao}m</p>
                  <p class="card-data"><b>Lançamento:</b> ${date}</p>
                  </div>
              </div></div>`;
    }
    $('#infos_filme').html(texto);
  });
}

function pesquisaFilmes() {
  const value = document.getElementById('campo_pesquisa').value;
  const valueEncode = encodeURI(value);
  const link = window.location.href = '../pages/pesquisa.html?q=' + valueEncode;
}

window.onload = function () {
  onLoad();
  $('#bt_pesquisa').click(pesquisaFilmes);
}