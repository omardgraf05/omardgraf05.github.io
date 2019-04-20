$(document).ready(function(){
    
    var $btnUp = $('.up')
    //Variables para el menu de navegación.
    var $fondoNav = $('#fondoNav');
    var $MarcaCol = $('#MarcaCol');
    var $MarcaBla = $('#MarcaBla');
    var $btnContactar = $('#contactar');
    var $aItems = $('#aItems');
    //Fin Variables para el menu de navegación.

    var $contBlack = $('#contBlack');
    var $contPopUp = $('#contPopUp');
    var $btnCerrar = $('#btnX');
    
    var $onModal = $('#onModal');
    var $contGaleria = $('#contGaleria');
    
    var $imgLocation = $('#contenidoImg').html();
    
    var $contenidoModalImg = $('#contenidoModalImg');
    var $blackLayer = $('#blackLayer');
    
    //Variables para las imagenes de cada marca.
    var $monarcoA = $('#monarcoA'); var $viewMonarco = $('#viewMonarco');
    
    var $brotherHA = $('#brotherHA'); var $viewBrotherH = $('#viewBrotherH');
    
    var $oniricaA  = $('#oniricaA'); var $viewOnirica = $('#viewOnirica');
    
    var $marcaCon01A = $('#marcaCon01A'); var $viewMarcaCon01 = $('#viewMarcaCon01');
    
    var $logofolioV1A = $('#logofolioV1A'); var $viewLogofolioV1 = $('#viewLogofolioV1');
    
    var $elCerroA = $('#elCerroA'); var $viewElCerro = $('#viewElCerro');
    
    var $conexiuA = $('#conexiuA'); var $viewConexiu = $('#viewConexiu');
    
    var $odA = $('#odA'); var $viewOd = $('#viewOd');
    
    //Variables para las imagenes de cada website.
    var $webOdB = $('#webOdB'); var $viewWebOd = $('#viewWebOd');
    
    var $webKokosB = $('#webKokosB'); var $viewWebKokos = $('#viewWebKokos');
    
    var $webCasaBlancaB = $('#webCasaBlancaB'); var $viewWebCasaBlanca = $('#viewWebCasaBlanca');
    
    //Variables para las imagenes de cada Ilustracion.
    var $ilustra01 = $('#ilustra01'); var $viewilustra01 = $('#viewilustra01');
    
    var $ilustra02 = $('#ilustra02'); var $viewilustra02 = $('#viewilustra02');
    
    var $ilustra03 = $('#ilustra03'); var $viewilustra03 = $('#viewilustra03');
    
    //  Bloque de código para desaparecer el boton-Top
      $btnUp.hide();
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $btnUp.fadeIn();
        } else {
          $btnUp.fadeOut('1500');
        }
      });

    //  Bloque de código para llevar hasta el top la ventana.
    $btnUp.click(function topUp(){ $('body, html').animate( {scrollTop:0}, 500);});

    //Abrir ventana modal de formulario de contacto.
    $btnContactar.on('click', function(){
        $contBlack.removeClass('displayNone').addClass('contBlack aparecerDer');
        $contPopUp.removeClass('displayNone').addClass('contPopUp centrado');
      });
      
    //Cerrar ventana modal de formulario de contacto.
    $contBlack.on('click',function(){
      $contPopUp.removeClass('contPopUp centrado').addClass('displayNone');
      $contBlack.removeClass('contBlack').addClass('displayNone');
    //$contGaleria.removeClass('contenidoGaleria').addClass('displayNone').find('img').remove();    
    });

    //Cambiar barra de navegación a tema oscuro.
    $fondoNav.on('mouseenter mouseleave', function(){
        $(this).toggleClass('fondoNavBlack').css("transition", "1s");
        $aItems.toggleClass('txtWhite');
        $btnContactar.toggleClass('txtWhite');
        $MarcaCol.toggleClass('displayNone');
        $MarcaBla.toggleClass('displayNone');
    });
    
    //Abrir galerías modal.
        //Con esta función se activa la capa negra y el contenedor del modal de galería.
        function openGallery (){$contenidoModalImg.removeClass('displayNone').addClass('contenidoGaleria aparecerDer'); $blackLayer.removeClass('displayNone').addClass('contBlack aparecerDer'); $btnCerrar.removeClass('displayNone').addClass('btnX aparecerDer');};

        //Con esta función se lleva al top cuando se da click a cualquiera de los img de galería.
        function $topUp(){ $('body, html').animate( {scrollTop:0}, 500); };
    //    function $stopScroll(){$("main").addClass("stopScroll");}

        $monarcoA.on('click', function(){
            $topUp(); openGallery(); 
            $viewMonarco.fadeIn().siblings().fadeOut();
        });
        $brotherHA.on('click', function(){
            $topUp(); openGallery();
            $viewBrotherH.fadeIn().siblings().fadeOut();
        });
        $oniricaA.on('click', function(){
            $topUp(); openGallery();
            $viewOnirica.fadeIn().siblings().fadeOut();
        });
        $marcaCon01A.on('click', function(){
            $topUp(); openGallery();
            $viewMarcaCon01.fadeIn().siblings().fadeOut();
        });
        $elCerroA.on('click', function(){
            $topUp(); openGallery();
            $viewElCerro.fadeIn().siblings().fadeOut();
        });
        $conexiuA.on('click', function(){
            $topUp(); openGallery();
            $viewConexiu.fadeIn().siblings().fadeOut();
        });
        $odA.on('click', function(){
            $topUp(); openGallery();
            $viewOd.fadeIn().siblings().fadeOut();
        });
        $logofolioV1A.on('click', function(){
            $topUp(); openGallery();
            $viewLogofolioV1.fadeIn().siblings().fadeOut();
        });
        $webOdB.on('click', function(){
            $topUp(); openGallery();
            $viewWebOd.fadeIn().siblings().fadeOut();
        });
        $webKokosB.on('click', function(){
            $topUp(); openGallery();
            $viewWebKokos.fadeIn().siblings().fadeOut();
        });
        $webCasaBlancaB.on('click', function(){
            $topUp(); openGallery();
            $viewWebCasaBlanca.fadeIn().siblings().fadeOut();
        });
    
        $ilustra01.on('click', function(){
            $topUp(); openGallery();
            $viewilustra01.fadeIn().siblings().fadeOut();
        });
        $ilustra02.on('click', function(){
            $topUp(); openGallery();
            $viewilustra02.fadeIn().siblings().fadeOut();
        });
        $ilustra03.on('click', function(){
            $topUp(); openGallery();
            $viewilustra03.fadeIn().siblings().fadeOut();
        });
    
    //Cerrar galería modal.
        $blackLayer.on('click', function(){
           $contenidoModalImg.removeClass().addClass('displayNone');
            $blackLayer.removeClass().addClass('displayNone');
            $btnCerrar.removeClass().addClass('displayNone');
        });
        $btnCerrar.on('click', function(){
           $contenidoModalImg.removeClass().addClass('displayNone');
            $blackLayer.removeClass().addClass('displayNone');
            $(this).removeClass().addClass('displayNone');
        });
    
    
//    $onModal.on('click','section', function(event){
//        // console.log($(this).children($(this)).html());
//        event.preventDefault();
//        //Insertar contenedor oscuro al final del header.
//        var overLayer = $('<div class="contBlack aparecerDer"></div>');
//        overLayer.appendTo("header");
//        //Capturar las etiquetas <img> de cada <section>
//        var imgLocation = $(this).children($(this)).html();
//        //Insertar la etiqueta en un <div> con una clase para su centrado.
//        var imgInsert = $('<div class="contenidoGaleria">' + imgLocation + '</div>');
//        //Insertar el anterior <div> con sus <img> en el contenedor oscuro.
//        imgInsert.appendTo(overLayer);
//    });
});

















