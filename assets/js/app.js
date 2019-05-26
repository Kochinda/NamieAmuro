
let template = null;

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true
    },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  });

  $(function(){

    $.get("card.html", function(temp){
        template = $(temp);
    })


    $('.btn-primary').on('click', function(){
    
        


        $.ajax({
            // データを通信するところ
                url:'https://itunes.apple.com/search',
                type: 'GET',
                dataType: 'jsonp',
                data: {
                term:'安室奈美恵',
                country:'jp',
                }
            
            
            }).done ( (data) => {

                $('#result').empty();

                

                for (item of data.results) {
        
                    let card = template.clone();
                    card.find('img').attr('src', item.artworkUrl100);
                    card.find('h5').text(item.collectionName);
                    card.find('a').attr('href', item.collectionViewUrl);
                    
                    $('#result').append(card);

                }
            



            }).fail( (error) =>{

            })

    });
            

    
  });

