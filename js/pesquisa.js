const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';
function onLoad(){
  const value = decodeURI(window.location.href.split('?q=')[1]);
  $.ajax({
    url: TMDB_ENDPOINT_BASE + '/search/movie?language=pt-BR',
    data: {
        api_key: '180ac44fc5ed0b884b70d3cc85f35e97',
        query: value,
    }
}).done(function (data) {
    let texto = '';
    if(data.results.length ==0){
      texto = '<h2> Nenhum resultado encontrado :c </h2>'
    }
    for (i = 0; i < data.results.length; i++) {
        console.log(data);
        imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
        titulo = data.results[i].original_title;
        descricao = data.results[i].overview.substring(0,100) + "...";
        date = data.results[i].release_date;
        aval = data.results[i].vote_average;
        const valueEncode = encodeURI(data.results[i].id);
        const link = 'detalhe.html?q=' + valueEncode;
        texto += `
        
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3 mb-5">
        <div class="card film-card" width="100%" style="background-color:#151a21;">
          <img src="${imagem}" class="card-img-top" alt="${titulo}">
          <div class="card-body">
            <p class="card-title" style="font-size: 10px"><b>${titulo}</b></p>
            <p class="card-text">${descricao}</p
            <p class="card-data"><b>Avaliação:</b> ${aval}</p>
            <p class="card-data"><b>Lançamento:</b> ${date}</p>
            <a href="${link}" class="btn btn-sm leia-btn" style="float:right;">Leia mais</a>
          </div>
        </div>
      </div>`;

    }
    $('#lista-pesquisa').html(texto);
});
}

window.onload = function () {
  onLoad();
}