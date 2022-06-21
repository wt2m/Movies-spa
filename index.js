const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

$('.nav a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 500);
});

function filmesLancamentos() {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
    data: {
      api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    }
  }).done(function (data) {
    let texto = '';

    for (i = 0; i < 4; i++) {
      const value = data.results[i].id;
      const valueEncode = encodeURI(value);
      const link = '../pages/pesquisa-retorno.html?q=' + valueEncode;
      imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
      titulo = data.results[i].original_title;
      texto += `<div class="col-12 col-sm-6 col-md-3 col-lg-3 card_area">
      <a href="${link}" class="link_img"><img src="${imagem}" alt="${titulo}" class="poster_principal"> </a>
          </div>`;
    }
    $('#lancamento_filmes').html(texto);
  });
}

function pesquisaFilmes() {
  const value = document.getElementById('campo_pesquisa').value;
  const valueEncode = encodeURI(value);
  const link = window.location.href = '../pages/pesquisa.html?q=' + valueEncode;
}

$(document).ready(function () {
  filmesLancamentos();
  $('#bt_pesquisa').click(pesquisaFilmes);
});



