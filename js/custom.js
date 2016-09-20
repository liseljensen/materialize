$(function() {
    
    $.ajax({
      url: 'http://api.randomuser.me/?results=30&nat=us',
      dataType: 'json',
      success: function(data) {
        var employee;
          //console.log(data);
        for (var i = 0; i < data.results.length; i++) {
            //employee = '<a class="list-group-item" href="#"><img class="employee-img" src="' + data.results[i].picture.thumbnail + '" alt="employee pic"/><span>' + data.results[i].name.first + ' ' + data.results[i].name.last + '</span></a>';
            employee = '<a class="collection-item avatar waves-effect waves-blue"><img src="' + data.results[i].picture.thumbnail + '" alt="" class="circle"><span class="title"><p>' + data.results[i].name.first + '</p> <p>' + data.results[i].name.last + '</p></a>';
            //console.log(employee);
            $('#employee-list').append(employee);
            //console.log('i: ' + (i-1));
            //console.log('length: ' + data.results.length);
            if ((i - 1) === (data.results.length - 2)) {
                //alert('last one');
                //$('#searchlist').btsListFilter('#searchinput');
            }
        }
        
      }
    });
    $('.collection').on('click', '.collection-item', function(event) {
        $this = $(this);
        $('.collection-item').not(this).fadeOut(400);
        $(this).children('.title').fadeOut(400);
        $('nav').fadeOut(400);
        $('.employee-name-container').fadeIn(400);
        
        
         
        
        setTimeout(
            function() {
                $this.children('img').addClass('selected');
                $this.addClass('selected');
                $('.employee-name').fadeIn(500);
                $('.collection').css('height', 'auto');
            },
            500
        );
        setTimeout(
            function() {
                $('#keypad').fadeIn(600); 
            },
            600
        );
        
        
    });

});