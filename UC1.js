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
    get firstName(){
        return this._firstName
    }
    set firstName(firstName){
        this._firstName = firstName
    }

    get lastName(){
        return this._lastName
    }
    set lastName(lastName){
        this._lastName = lastName
    }

    get address(){
        return this._address
    }
    set address(address){
        this._address = address
    }

    get city(){
        return this._city
    }
    set city(city){
        this._city = city
    }

    get state(){
        return this._state
    }
    set state(state){
        this._state = state
    }

    get zipcode(){
        return this._zipcode
    }
    set zipcode(zipcode){
        this._zipcode = zipcode
    }

    get phone(){
        return this._phone
    }
    set phone(phone){
        this._phone = phone
    }

    get email(){
        return this._email
    }
    set email(email){
        this._email = email
    }

    //Method
    toString(){
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zipcode + ", Phone = " + this.phone + ", Email = " + this.email
    }
}

let addressBookContact = new AddressBookContact("Soumik", "Pal", "Palbazar", "Kolkata", "West Bengal", "700075", "9898989898", "soumik@gmail.com")
console.log(addressBookContact.toString())