import {test,expect} from '@playwright/test';
import { DataGenerator } from '../../utils/dataGenerator';
import dotenv from 'dotenv';
import {Routes} from '../../api/endpoints/routes';

dotenv.config();

test.describe.serial('Products API test with CRUD workflow @master @api', () =>{
    const BASE_URL =  process.env.API_BASE_URL || Routes.BASE_URL;
    let createdProductId : number;
    const PRODUCT_ID = Number(process.env.PRODUCT_ID ?? 1);

    test('GET - All Products @master @api',async ({request}) =>{
        const response = await request.get(`${BASE_URL}${Routes.GET_ALL_PRODUCTS}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBeTruthy();
        expect(responseBody.length).toBeGreaterThan(0);
        
        responseBody.forEach((product : any) => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('title');
            expect(product).toHaveProperty('price');
            expect(product).toHaveProperty('category');
            expect(product).toHaveProperty('image');
        })

        console.log('Get All Products:', JSON.stringify(responseBody, null, 2));
    })

    test('POST - Add new product @master @api',async ({request}) => {
        const payload = DataGenerator.generateProductPayload();
        const response = await request.post(`${BASE_URL}${Routes.CREATE_PRODUCT}`,{
            data : payload
        });

        expect(response.status()).toBe(201);
        const createdProduct =await response.json();

        expect(createdProduct).toHaveProperty('id');
        expect(createdProduct.title).toBe(payload.title);
        createdProductId = createdProduct.id;

        console.log(` New Product created using id ${createdProductId}`, JSON.stringify(createdProduct,null,2));
    })

    test('GET - Product by ID @master @api', async({request}) => {
        const response = await request.get(`${BASE_URL}${Routes.GET_PRODUCT_BY_ID.replace('{id}', String(PRODUCT_ID))}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
       
        expect(responseBody.id).toBe(PRODUCT_ID);
        expect(responseBody).toHaveProperty('title');
        expect(responseBody).toHaveProperty('price');
        expect(responseBody).toHaveProperty('description');
        expect(responseBody).toHaveProperty('category');
        expect(responseBody).toHaveProperty('image');
        
        console.log('Get Product by ID ${createdProductId} : ', JSON.stringify(responseBody, null, 2));
    })

    test('Update - Update the product title @master @api', async ({request}) => {
        const payload = DataGenerator.generateUpdatedProductPayload();

        const responseBody = await request.put(`${BASE_URL}${Routes.UPDATE_PRODUCT.replace('{id}',String(createdProductId))}`,{
            data : payload
        });

        expect(responseBody.status()).toBe(200);
        const updatedProduct = await responseBody.json();

        expect(updatedProduct.id).toBe(createdProductId);
        expect(updatedProduct.title).toBe(payload.title);

        console.log('Get Updated Product by ID ${createdProductId} : ', JSON.stringify(updatedProduct, null, 2));
    })

    test('Delete - Delete the created Product @master @ap', async ({request}) => {
        const response = await request.delete(`${BASE_URL}${Routes.DELETE_PRODUCT.replace('{id}', String(createdProductId))}`);
        expect(response.status()).toBe(200);

        console.log(`Product deleted successfully :  ${createdProductId}`);
    })



})
