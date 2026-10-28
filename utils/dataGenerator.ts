import {faker} from '@faker-js/faker';

export class DataGenerator {

    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getPassword(length: number =8): string {
        return faker.internet.password({length});
    }

    static getUsername(): string {
        return faker.internet.username();
    }

    static getPhoneNumber(): string {
        return faker.phone.number();
    }

    //Product
    static getProductName(): string {
        return faker.commerce.productName();
    }

    static getProductPrice(): string {
        return faker.commerce.price({min: 1 , max: 700,dec :2});
    }

    static getProductDescription() : string {
        return faker.commerce.productDescription();
    }

    static getDepartment() : string {
        return faker.commerce.department();
    }

    static getImageUrl() : string {
        return faker.image.url();
    }
    //API Payload

    static generateUserPayload() {
    return {
        username: this.getUsername(),
        email: this.getEmail(),
        password: this.getPassword()
    };
}

    static generateProductPayload() {
     return {
        title: this.getProductName(),
        price: parseFloat(this.getProductPrice()),
        description: this.getProductDescription(),
        category: this.getDepartment().toLowerCase(),
        image: this.getImageUrl()
     }

    }

    static generateUpdatedProductPayload() {
        const payload = this.generateProductPayload();
        //updates the existing title property by adding the word "Updated "
        payload.title = `Updated ${payload.title}`;
        return payload;
    }
}