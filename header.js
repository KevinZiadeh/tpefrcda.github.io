
    $(document).ready(function(){
      setInterval(function(){
    if($(window).width() <= 500){
      $(".us").addClass('usact');
      $(".header").addClass('headeract');
      $(".emotions").addClass('emotionsact');
      $(".systemes").addClass('systemesact');
    }
    else {
      $(".us").addClass('us').removeClass('usact');
      $(".header").addClass('header').removeClass('headeract');
      $(".emotions").addClass('emotions').removeClass('emotionsact');
      $(".systemes").addClass('systemes').removeClass('systemesact');
    }
    }, 100);


    $('.emotions').hide();
    $('.systemes').hide();


    $('#emo').click(function() {
      $('.emotions').show('300');
      $('.emotionsact').show('300');
    });

    $('#emo').mouseleave(function() {
      $('.emotions').hide('300');
      $('.emotionsact').hide('300');
        });


        $('#sys').click(function() {
          $('.systemes').show('300');
          $('.systemesact').show('300');
        });

        $('#sys').mouseleave(function() {
          $('.systemes').hide('300');
          $('.systemesact').hide('300');
            });


    });
