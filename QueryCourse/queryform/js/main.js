var cart = 0;

function addItem(id, name, description, price, moreInfo) {
  let html = '';
  html += '<div class="item" data-id="' + id + '">';
  html += '<div class="name">' + name + '</div>';
  html += '<img src="assets/beach.jpg"></img>';
  html += '<div class="description">' + description + '</div>';
  html += '<div class="price">' + price + '</div>';
  html += '<button class="item-add">Add to cart</button>';
  html += '<button class="item-remove">Remove</button>';
  html += '<br/>';
  html += '<a class="more-info-link" href="#">More info</a>';
  html += '<div class="more-info">' + moreInfo + '</div>';
  html += '</div>';

  $('#container').prepend(html);
}

$(document).ready(function(){
    $('#container').on('click','.more-info-link', function(event){
      event.preventDefault();
  
      $(this).parent().find('.more-info').slideToggle('slow');
      $(this)
        .animate({ "opacity": 0.5, "margin-left": 10 }, 150)
        .animate({ "opacity": 1.0, "margin-left": 0 }, 150);
    });
  
    $('#container').on('click','.item-remove',function(){
      $(this).parent().remove();
    });
  
    $.ajax('data/item.json', {
      dataType: 'json',
      contentType: 'application/json',
      cache: false
    })
    .done(function(response){
      let items = response.items;
      items.forEach(function(item){
        addItem(item.id, item.name, item.description, item.price, item.moreInfo);
      });
    })
    .fail(function(request, errorType, errorMessage){
      console.log(errorMessage);
    })
    .always(function(){
  
    });
  
    $('#container').on('click','.item-add',function(){
      let id = $(this).parent().data('id');
  
      $.ajax('data/addToCart.json', {
        type: 'post',
        data: { id: id },
        dataType: 'json',
        contentType: 'application/json'
      })
      .done(function(response) {
        if (response.message === 'success') {
          let price = response.price;
  
          cart += price;
  
          $('#cart-container').text('$' + cart);
        }
      });
    });
  
    $('#newsletter-checkbox').on('change',function(){
      if ($(this).is(':checked')) {
        $('#newsletter-frequency').fadeIn();
      } else {
        $('#newsletter-frequency').fadeOut();
      }
    });
    $('#newsletter-checkbox').trigger('change');
  
    $('#cart-form').on('submit',function(event){
      event.preventDefault();
  
      let data = { form: $(this).serialize(), price: cart };
  
      $.ajax($(this).attr('action'), {
        type: 'post',
        data: data
      })
      .done(function(response){
        $('#feedback-message').text(response.message);
      });
    });
  });
  
// $(this).animate({ "opacity": 0.5, "margin-left": 10 }, 150);
// $(this).animate({ "opacity": 1.0, "margin-left": 0 }, 150);

// Causes link to print message not href, types words in box to text
// $(document).ready(function(){
//     $('#input-name').on('keyup', function(){
//         let name = $(this).val();
//         $('#feedback-message').text('Pleased to meet you, ' + name);
//     });
//     $('a').on('click', function(event){
//         event.preventDefault();
//         $('#feedback-message').text('That\'s fine!')
//     });
// });

// prints options with text
// $(document).ready(function(){
//     $('#select-menu').on('change', function(){
//         let name = $('#select-menu option:selected').text();
//         let distance = $('#select-menu option:selected').val();
//         let price = $('#select-menu option:selected').data('price');

//         $('#feedback-message').text('You are signing up for a ' + name + 
//         ', which costs ' + price + ', to a distance of ' + distance + 'km.');
//     });
// });

//Changes box color back and forth
// $(document).ready(function(){
//     $('.box').on('click', '.box-button', function() {
//         $(this).parent().toggleClass('highlight');
//     });
// });

//Change box color once
// $(document).ready(function(){
//     $('.box').on('click', function() {
//         $(this).addClass('highlight');
//     });
// });


// Find the div class hot children Blue Fire
// $(document).ready(function(){
//     $('#snow')
//     .parent() //Parent goes up, Children goes down
//     .find('.title')
//     //.first()
//     .addClass('highlight');
// });

//Shows all the parent 
//console.log($('#snow').parents(''));

// Find the div class hot children Blue Fire
// $(document).ready(function(){
//     $('#container')
//     .find('.hot')
//     .children()
//     .first()
//     .addClass('highlight');
// });

// Find the div class hot children Blue Lava
// $(document).ready(function(){
//     $('#container')
//     .find('.hot')
//     .children()
//     .first() or .last()
//     .next() or .prev()
//     .addClass('highlight');
// });

// Find the div class hot children Blue Steam
// $(document).ready(function(){
//     $('#container')
//     .find('.hot')
//     .children()
//     .last()
//     .addClass('highlight');
// });

// Find the div class hot children Blue Lava
// $(document).ready(function(){
//     $('#container')
//     .find('.hot')
//     .children('.solid')
//     .addClass('highlight');
// });

// Find the div class hot
// $(document).ready(function(){
//     $('#container').find('.hot');
// });

// Highlights all the inputs with required in tag
// $(document).ready(function(){
//     $('#container input:required').addClass('highlight');
// });

//Highlights First and Last 
// $(document).ready(function(){
//     $('#container input[placeholder*=Name]').addClass('highlight');
// });

//Only adds highlights to the email
// $(document).ready(function(){
//     $('#container input[placeholder=E-mail]').addClass('highlight');
// });

