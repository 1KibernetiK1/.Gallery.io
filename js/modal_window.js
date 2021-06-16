$('#myModal').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget); // выясняем какая картинка запустила
    var img = button.data('img'); //получаем данные от атрибута data-img
    var name = button.data('name'); //получаем данные от атрибута dataname
    $(".modal-title").html(name); //вставляем название картинки в заголовок модального о
    $(".modal-body").html(`<img class='imgbig col' src='${img}'>`);//вставляем картинку в тело модального окна
   })