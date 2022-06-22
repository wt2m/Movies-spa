

function filmeLancamento() {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + '/movie/upcoming?language=pt-BR',
    data: {
      api_key: '180ac44fc5ed0b884b70d3cc85f35e97',
    }
  }).done(function (data) {
    var texto = '';
    var texto2 = '';
    var textoButtons = '';
    for (i = 0; i < 8; i++) {
      imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
      descricao = data.results[i].overview.substring(0,100) + "...";
      titulo = data.results[i].original_title;
      aval = data.results[i].vote_average;
      date = data.results[i].release_date;
      const value = data.results[i].id;
      const valueEncode = encodeURI(value);
      const link = 'pesquisa.html?q=' + valueEncode;
      textoButtons += i == 0 
      ? ('<button type="button" data-bs-target="#carousel-releases" data-bs-slide-to="'+i+'" class="active" aria-current="true" aria-label="Slide '+i+'"></button>')
      : ('<button type="button" data-bs-target="#carousel-releases" data-bs-slide-to="'+i+'" class="active" aria-label="Slide '+i+'"></button>')

      texto += i == 0 
      ? ('<div class="carousel-item active">')
      : ('<div class="carousel-item">')

      texto += `
                  <div class="row" style="margin-bottom: 35px;">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" style="height: 400px; display: flex; align-items: center;" height="100%">
                            <img src="${imagem}" class="card-img-top" alt="${titulo}" style="width: unset; max-height:400px; margin: auto;">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 film-description" >
                      <h3 height="100% ">
                        ${titulo}
                      </h3>
                      <div class="col-12">
                        <p><span class="section-span">Sinopse:</span> ${descricao}</p>
                      </div>
                      <div class="row ">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                          <p><span class="section-span">Lançamento: </span> ${date}</p>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <p><span class="section-span">Avaliação:</span> ${aval}</p>
                      </div>
                    </div>
                  </div>
                </div>
      `;
      switch(i){
        case 0:
          texto2 +=
          ` <div class="container">
              <div class="row" style="margin-bottom: 1.5rem;">
                <div class="col-xs-12 col-11 col-md-4 ">
                  <img style="float:right; max-height: 120px; margin:auto;"  src="${imagem}" alt="${titulo}">
                </div>
                <div class="col-xs-12 col-12 col-md-6 ">
                  <h5>${titulo}</h5>
                  <p class="news-description">${descricao}</p>
                  <span class="badge bg-dark news-badge">${aval}</span>
                </div>
              </div>
            </div>
          `;
          break;
        case 1:
          texto2 +=
          ` <div class="container">
              <div class="row" id="medium-news">
                <div class="col-xs-12 col-11 col-md-4 ">
                  <img style="float:right; max-height: 120px; margin:auto;"  src="${imagem}" alt="${titulo}">
                </div>
                <div class="col-xs-12 col-12 col-md-6 ">
                  <h5>${titulo}</h5>
                  <p class="news-description">${descricao}</p>
                  <span class="badge bg-dark news-badge">${aval}</span>
                </div>
              </div>
            </div>
          `;
          break;
        case 2:
            texto2 +=
            ` <div class="container">
                <div class="row" id="last-news">
                  <div class="col-xs-12 col-11 col-md-4 ">
                    <img style="float:right; max-height: 120px; margin:auto;"  src="${imagem}" alt="${titulo}">
                  </div>
                  <div class="col-xs-12 col-12 col-md-6 ">
                    <h5>${titulo}</h5>
                    <p class="news-description">${descricao}</p>
                    <span class="badge bg-dark news-badge">${aval}</span>
                  </div>
                </div>
              </div>
            `;
            break;
          default:
            break;

      }
    }
    $('#news-data').html(texto2);
    $('#indicators').html(textoButtons);
    $('#carousel-destaques').html(texto);
  });
}

$(document).ready(function () {
  filmeLancamento();
  $('#bt_pesquisa').click(pesquisaFilmes);
});
