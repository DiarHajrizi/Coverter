$(function(){
    $('body').on('click','.ko', function(){ 
               
        var deegres = $('#degrees').val();
        var type = $('#temp_type').val()
   
        if(type == 'fahreheit'){ 
            var result = deegres * 8            
            
        }else if(type == 'kalvin') { 
            var result = deegres * 4
        
        }
        $( ".rezultati" ).text(result)
    
    })
});

