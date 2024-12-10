import { faker } from '@faker-js/faker'

let countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']

export default {
    createUser: function() {
        let dados = {
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "phone": faker.phone.number(),
            "zipcode": faker.location.zipCode(),
            "address": faker.location.street(),
            "city": faker.location.city(),
            "state": faker.location.state(),
            "country": countries[Math.floor(Math.random() * (6 - 0))],

            "birthDay": Math.floor(Math.random() * (31 - 1)),
            "birthMonth": Math.floor(Math.random() * (12 - 1)),
            "birthYear": Math.floor(Math.random() * (120 - 1))

        }

        return dados
    }
}