// Controls the showing and hiding of the checkbox
var checkbox = document.getElementById('petCheckBox');
var selectionDiv = document.getElementById('petSelection');
checkbox.addEventListener('change', function (event){
    if (checkbox.checked == true) {
        selectionDiv.style.display = 'Block';
    } else {
        selectionDiv.style.display = 'None';
    }
});

// Saves the form
var saveForm = document.getElementById('saveForm');
saveForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameText = saveForm.elements[0].value;
    var addressText = saveForm.elements[1].value;
    var ageText = saveForm.elements[2].value;
    var doesHavePets = saveForm.elements[3].checked;
    var petText = 'No Pets';
    if (addressText == '') {
        alert('Please enter an address');
        return;
    }
    if (nameText == '') {
        alert('Please enter a name');
        return;
    }
    if (ageText == '') {
        alert('Please enter an age');
        return;
    }
    if (doesHavePets) {
        petText = saveForm.elements[4].value;
    }
    alert('Booking saved! Info: \n' +
    nameText +'\n' +
    addressText + '\n' +
    ageText + '\n' +
    petText
    );
});

// if you wanted to excluse a listing ex.no more dog rooms avalible
// if (petText == 'Dog') {
//     alert('Sorry, our dog capacity is fill:('');
// }