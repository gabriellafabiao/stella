// Selecionar todos os elementos de vídeo com a classe 'meuVideo'
var videos = document.querySelectorAll(".meuVideo");

// Iterar sobre cada vídeo e aplicar o comportamento desejado
videos.forEach(function(video) {
  // Iniciar o vídeo automaticamente quando a página carregar
  video.autoplay = true;
});

