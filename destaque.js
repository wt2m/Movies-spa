const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

var resp;
var qnt = 0;
var texto = '';
function filmeDestaque() {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
    data: {
      api_key: '180ac44fc5ed0b884b70d3cc85f35e97',
    }
  }).done(function (data) {
    resp = data;
    qnt = 1;

    for (i = 0; i < 4; i++) {
      imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
      descricao = data.results[i].overview.substring(0,100) + "...";
      titulo = data.results[i].original_title;
      aval = data.results[i].vote_average;
      date = data.results[i].release_date;
      const value = data.results[i].id;
      const valueEncode = encodeURI(value);
      const link = '../pages//pesquisa-retorno.html?q=' + valueEncode;
      texto += `
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div class="card film-card" width="100%">
        <img src="${imagem}" class="card-img-top" alt="${titulo}">
        <div class="card-body">
          <p class="card-title" style="font-size: 10px"><b>${titulo}</b></p>
          <p class="card-text">${descricao}</p
          <p class="card-data"><b>Avaliação:</b> ${aval}</p>
          <p class="card-data"><b>Lançamento:</b> ${date}</p>
          <a href="${link}" class="btn btn-primary" style="float:right;">Leia mais</a>
        </div>
      </div>
    </div>
      `;
      /*
      </div>
      <div class="col-3"><div class="card card_poster" style="width: 18rem;">
      <img src="${imagem}" class="card-img-top" alt="${titulo}">
      <div class="card-body">
          <h5 class="card-title"><b>${titulo}</b></h5>
          <p class="card-text">${descricao}</p>
              <p class="card-data"><b>Avaliação:</b> ${aval}</p>
              <p class="card-data"><b>Lançamento:</b> ${date}</p>
          <a href="${link}" class="btn btn-primary">Leia mais</a>
      </div>
  </div>
      
      */
    }
    $('#lista-destaques').html(texto);
  });
}

function carregarMais(){
  data = resp;
  for (i = 4*qnt; i < 4*(qnt+1); i++) {
    
    imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
    descricao = data.results[i].overview.substring(0,50) + "...";
    titulo = data.results[i].original_title;
    aval = data.results[i].vote_average;
    date = data.results[i].release_date;
    const value = data.results[i].id;
    const valueEncode = encodeURI(value);
    const link = '../pages//pesquisa-retorno.html?q=' + valueEncode;
    texto += `
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-2">
          <div class="card film-card" width="100%">
            <img src="${imagem}" class="card-img-top" alt="${titulo}">
            <div class="card-body">
              <p class="card-title" style="font-size: 10px"><b>${titulo}</b></p>
              <p class="card-text">${descricao}</p
              <p class="card-data"><b>Avaliação:</b> ${aval}</p>
              <p class="card-data"><b>Lançamento:</b> ${date}</p>
              <a href="${link}" class="btn btn-primary" style="float:right;">Leia mais</a>
            </div>
          </div>
        </div>
    `;
  }
  qnt++;
  if(12 <= 4*(qnt)){
    console.log("Aqui!");
    $('#btnCarregaMaisDestaque').prop("disabled",true);
    $('#btnCarregaMaisDestaque').hide();
  }
  $('#lista-destaques').html(texto);
}

function pesquisaFilmes() {
  const value = document.getElementById('campo_pesquisa').value;
  const valueEncode = encodeURI(value);
  window.location.href = '../pages/pesquisa.html?q=' + valueEncode;
}

$(document).ready(function () {
  filmeDestaque();
  $('#bt_pesquisa').click(pesquisaFilmes);
});
