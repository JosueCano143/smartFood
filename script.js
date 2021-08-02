var $messages = $('.messages-content'),
  d, h, m,
  i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
   'Hola, soy Prometeo, soy la IA que te ayudará a crear tu alimento ideal. /n ¿Cuál es el nobmbre de tu compañia?',
  'Entendido, ¿Cuál es el nombre del producto que desea preparar?',
  'Puedo ayudarte de diferentes maneras: A)Crear un producto desde cero en su totalidad. B)Mejorar tu producto.   Por favor elige la opción que necesites:',
  '¡Excelente Veggie delicatessen!, ahora elige en qué rubro quieres mejorar tu producto: A)Propiedades organolépticas(sabor, color, etc). B)Aspectos nutricionales (kcal, proteinas, fibra, etc).  C)Otro.    Por favor selecciona la opción que necesites',
  'Las propiedades organolépticas son enormes, dime en cuáles propiedades te gustaría que me enfocara: A)Sabor B)Olor C)Color D)Textura E)Ruido F) Sensaciones térmicas G)Sensaciones químicas H)Sensaciones táctiles  Por favor selecciona la opción que necesites',
  'El sabor es elemental al vender un producto, ¿qué sabor o sabores consideras qeu tu formmulación necesita mejorar para tener tu producto ideal?  A)Dulce B)Salado C)Amargo D)Ácido E)Astringente F)Picante G)Umami',
  '¡Ya casi acabamos! Por favor, envianos la formulación de tu producto, no te preocues, el secreto estará bien guardado y jamás compartiremos la receta con alguien ajeno.',
  'Gracias por confiar en nosotros, revisaremos tu formulación y crearemos mejoras en el Sabor Dulce y Ácido de acuerdo  nuestra base de datos, te enviaremos los resultados lo más pronto posible.',
  'Hasta la proxima. :)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="bot.gif" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="bot.gif" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
   $('.menu .button').toggleClass('active');
});
