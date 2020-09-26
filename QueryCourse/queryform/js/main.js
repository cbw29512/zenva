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

