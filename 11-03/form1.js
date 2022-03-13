let forms = document.querySelector('#btn');
forms.onclick = (event) => {
    event.preventDefault();

    let surname = document.querySelector('#surname').value;
    let name = document.querySelector('#name').value;
    let patronymic = document.querySelector('#patronymic').value;
    let  PlaceOfResidence = document.querySelector('#PlaceOfResidence').value;
    let inn = document.querySelector('#inn').value;
    let date = document.querySelector('#date').value;
    let contactNumber = document.querySelector('#contactNumber').value;
    let email = document.querySelector('#email').value;
    let  nameOfTheBank = document.querySelector('#nameOfTheBank').value;
    let ActualPlaceOfResidence = document.querySelector('#ActualPlaceOfResidence').value;


let object = {
    surname: surname,
    name: name,
    patronymic: patronymic,
    PlaceOfResidence: PlaceOfResidence,
    inn:inn,
    date:date,
    contactNumber:contactNumber,
    email:email,
    nameOfTheBank: nameOfTheBank,
    ActualPlaceOfResidence:ActualPlaceOfResidence
 }
    console.log(object)
}