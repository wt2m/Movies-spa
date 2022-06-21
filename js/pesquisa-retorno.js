const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function onLoad() {
  const value = decodeURI(window.location.href.split('?q=')[1]);
  $.ajax({
    url: TMDB_ENDPOINT_BASE + `/movie/${value}?language=pt-BR`,
    data: {
      api_key: '180ac44fc5ed0b884b70d3cc85f35e97',
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
      texto += `<div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-5 mb-5" style="display: flex; align-items: center;" height="100%">
      <img src="${imagem}" class="card-img-top" alt="${titulo}" width="100%">
  </div>
  <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-5 mb-7">

      <h3 height="100% ">
          ${titulo}
        </h3>
        <div class="col-12">
          <p><span class="section-span">Sinopse:</span>${descricao}</p>
        </div>
        <div class="row ">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <p><span class="section-span">Direção:</span> Hideaki Anno, Kazuya Tsurumaki</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <p><span class="section-span">Estreia:</span> ${date}</p>
          </div>
        </div>
        <div class="col-12">
          <p><span class="section-span">Avaliação:</span> ${aval}</p>
        </div>
  </div>`;
    }
    $('#data-filme').html(texto);
  });
}

function pesquisaFilmes() {
  const value = document.getElementById('campo_pesquisa').value;
  const valueEncode = encodeURI(value);
  const link = window.location.href = '../pages/pesquisa.html?q=' + valueEncode;
}

window.onload = function () {
  onLoad();

}