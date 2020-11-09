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

try{
    let addressBookContact = new AddressBookContact("Soumik", "Pal", "Palbazar", "Kolkata", "West Bengal", "700075", "9898989898", "soumik@gmail.com")
    console.log(addressBookContact.toString())
}
catch(e){
    console.error(e)
}