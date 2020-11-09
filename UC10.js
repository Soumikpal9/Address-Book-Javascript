class AddressBookContact{
    //Property
    
    //Constructor
    constructor(firstName, lastName, address, city, state, zipcode, phone, email){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zipcode = zipcode
        this.phone = phone
        this.email = email
    }

    //Getter And Setter 
    get firstName() {return this._firstName}
    set firstName(firstName) { 
        const nameRegexPattern = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if (nameRegexPattern.test(firstName)) this._firstName = firstName
        else throw "Invalid First Name!"
    }
    
    get lastName() {return this._lastName}
    set lastName(lastName) {
        const nameRegexPattern = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if (nameRegexPattern.test(lastName)) this._lastName = lastName
        else throw "Invalid Last Name!"
    }
    
    get address() {return this._address}
    set address(address) {
        const locationRegex = RegExp("^[A-Z]{1}[a-z]{3,}$")
        if(locationRegex.test(address))this._address = address
        else throw "Invalid Address!"
    }
    
    get city() {return this._city}
    set city(city) {
        const locationRegex = RegExp("^[A-Z]{1}[a-z]{3,}$")
        if(locationRegex.test(city))this._city = city
        else throw "Invalid City!"
    }
    
    get state() {return this._state}
    set state(state) {
        const locationRegex = RegExp("^[A-Z]{1}[a-zA-Z ]{3,}$")
        if(locationRegex.test(state))this._state = state
        else throw "Invalid State!"
    }
    
    get zipcode() {return this._zipcode}
    set zipcode(zipcode) {
        const pinRegex = RegExp("^([1-9])(\\S){2}(\\s)?\\S{2}[0-9]$")
        if(pinRegex.test(zipcode))this._zipcode = zipcode
        else throw "Invalid Zipcode"
    }
    
    get phone() {return this._phone}
    set phone(phone) {
        const phoneRegex = RegExp("^\\d{2} [1-9]\\d{9}$")
        if(phoneRegex.test(phone)) this._phone = phone
        else throw "Invalid Phone Number!"
    }
    
    get email() {return this._email}
    set email(email) {
        const emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$")
        if(emailRegex.test(email)) this._email = email
        else throw "Invalid Email Address!"
    }

    //Method
    toString(){
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zipcode + ", Phone = " + this.phone + ", Email = " + this.email
    }
}

function contactPresent(firstName, lastName){
    return addressBookArr.some(contact => contact.firstName == firstName && contact.lastName == lastName)
}

function editContact(firstName, lastName, property, value){
    if(contactPresent(firstName, lastName)){
    switch(property){
        case "address":
            addressBookArr.find((contact) => contact.firstName == firstName).address = value
            break;
        case "city":
            addressBookArr.find((contact) => contact.firstName == firstName).city = value
            break;
        case "state":
            addressBookArr.find((contact) => contact.firstName == firstName).state = value
            break;
        case "zip":
            addressBookArr.find((contact) => contact.firstName == firstName).zip = value
            break;
        case "phone":
            addressBookArr.find((contact) => contact.firstName == firstName).phoneNo = value
            break;
        case "email":
            addressBookArr.find((contact) => contact.firstName == firstName).email = value
            break;
        default:
            console.log("Enter valid property")
    }
  }else{
      console.log("Contact Is Not Present")
  }
}

function deleteContact(firstName, lastName){
    if(contactPresent(firstName, lastName)){
        addressBookArr = addressBookArr.filter(contact => contact.firstName != firstName && contact.lastName != lastName)
    }else{
        console.log("Contact Is Not Present")
    }
}

function numOfContact(contact){
    contact++
    return contact;
}

function addContact(contact){
    if(contactPresent(contact.firstName, contact.lastName)){
        throw "Contact Already Present!"
    }else{
        addressBookArr.push(contact)
    }
}

function searchContactByCity(city) {
    return addressBookArr.filter((contact) => contact.city == city)
}
  
function searchContactByState(state) {
    return addressBookArr.filter((contact) => contact.state == state)
}

function countByCity(){
    addressBookArr.filter((contact) => countByCityMap.set(contact.city, searchContactByCity(contact.city).length))
    return countByCityMap
}

function countByState(){
    addressBookArr.filter((contact) => countByStateMap.set(contact.state, searchContactByCity(contact.state).length + 1))
    return countByStateMap
}

let addressBookArr = new Array()
let countByCityMap = new Map()
let countByStateMap = new Map()
try{
    let addressBookContact = new AddressBookContact("Soumik", "Pal", "Palbazar", "Kolkata", "West Bengal", "700075", "91 9898989898", "soumik@gmail.com")
    addContact(addressBookContact)
}
catch(e){
    console.error(e)
}
try{
    let addressBookContact = new AddressBookContact("Aritra", "Paul", "Saltlake", "Kolkata", "West Bengal", "700045", "91 8787878787", "aritra@gmail.com")
    addContact(addressBookContact)
}
catch(e){
    console.error(e)
}

console.log(addressBookArr)

editContact("Aritra", "Paul", "address", "Whitefield")
editContact("Aritra", "Paul", "city", "Bangalore")
editContact("Aritra", "Paul", "state", "Karnataka")
console.log(addressBookArr)

console.log("Number Of Contacts In The Address Book : " + addressBookArr.reduce(numOfContact, 0))

try{
    let addressBookContact = new AddressBookContact("Soumik", "Pal", "Palbazar", "Kolkata", "West Bengal", "700075", "91 9898989898", "soumik@gmail.com")
    addContact(addressBookContact)
}
catch(e){
    console.error(e)
}

console.log(searchContactByCity("Bangalore"))
console.log(countByCity())
console.log(countByState())