$(document).ready(function() {
  var dibujarGifs = function(data) {
      var gif= "";
      data.forEach(function (element) {
          gif = element.images.downsized_large.url;
          $("#elementos").append(armarTemplate(gif));
      });
  }

  var armarTemplate = function(gif,url) {
      var t= "<img class='elemento'src='" + gif + "'/>"
      return t;
  }

  var ajaxGif = function(gif) {
      $.ajax({
          url: 'https://api.giphy.com/v1/gifs/search?',
          type: 'GET',
          datatype: 'json',
          data: {
              q: gif,
              api_key: 'FRgS3vFALq2d3qcwxKA8YwD2HH3J4Q3T'
          }
      })
      .done(function(response) {
          console.log(response);
          dibujarGifs(response.data);
      })
      .fail(function() {
          console.log("error");
      });
  }

  $("#buscar-gif").click(function(event) {
      console.log("Entro");
      $("#elementos").empty();
      var gif= $("#gif-text").val();
      ajaxGif(gif);
  });
});