jQuery(function($){
    $('div .card').on('mouseenter',function(){
        $(this).css('border-bottom', '2px solid #57cbcc') 
    });

    $('div .card').on('mouseleave',function(){
        $(this).css('border-bottom', '2px solid #242930')
    })    
});

