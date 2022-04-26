//importing another class file to the class file
const PersonInformation = require("./PersonInformation.js");
const prompt = require('prompt-sync')();

class AddressBook {
    contactList = new Array();
    insert(contactList) {
        let personInfo = new PersonInformation();
        try {
            personInfo.firstName = prompt("Enter First Name : ");
            personInfo.lastName = prompt("Enter Last Name : ");
            personInfo.address = prompt("Enter Address : ");
            personInfo.city = prompt("Enter City : ");
            personInfo.state = prompt("Enter State : ");
            personInfo.zip = prompt("Enter Zip : ");
            personInfo.phoneNumber = prompt("Enter Phone Number : ");
            personInfo.email = prompt("Enter Email : ");
            contactList.push(personInfo);

            return contactList;
        } catch (e) {
            console.error(e);
        }
    }

    editContact(contactList) {
        let fName = prompt("Enter the First Name of the Contact : ");
        contactList.forEach(contact => {
            if ((contact.firstName === fName) == true) {
                let input = 1;
        while(input != 9){
            console.log("1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
            console.log("6. Edit ZipCode \n7. Edit Phone No \n8. Edit Email \n9. Exit")
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
            switch (input) {
                case 1:
                    let fname = prompt("Enter the first Name: ")
                    contact.firstName = fname
                    break
                case 2:
                    let lname = prompt("Enter the last Name: ")
                    contact.lastName = lname
                    break
                case 3:
                    let address_edit = prompt("Enter the address: ")
                    contact.address = address_edit
                    break
                case 4:
                    let city_edit = prompt("Enter the city: ")
                    contact.city = city_edit
                    break
                case 5:
                    let state_edit = prompt("Enter the State: ")
                    contact.state = state_edit
                    break
                case 6:
                    let zip_edit = prompt("Enter the zip: ")
                    contact.zip = zip_edit
                    break
                case 7:
                    let phone_edit = prompt("Enter the phone number: ")
                    contact.phoneNo = phone_edit
                    break
                case 8:
                    let mail_edit = prompt("Enter the email: ")
                    contact.email = mail_edit
                    break
                case 9:
                    break
                default:
                    console.log("Wrong Input")
            }
        }
            } else {
                console.log("No contact present with this name!")
            }
        });
        return contactList;
    }
}

module.exports = AddressBook;