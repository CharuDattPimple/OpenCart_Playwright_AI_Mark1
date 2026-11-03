import {test,expect} from '@playwright/test';
import { DataGenerator } from '../../utils/dataGenerator';
import dotenv from 'dotenv';
import {Routes} from '../../api/endpoints/routes';
import { TIMEOUT } from 'node:dns';

// dotenv.config({override : true});
import { getRequiredUrl, getRequiredEnv } from '../../utils/environment';

const BASE_URL = getRequiredUrl('API_BASE_URL').replace(/\/+$/, '');
const API_USERNAME = getRequiredEnv('API_USERNAME');
const API_PASSWORD = getRequiredEnv('API_PASSWORD');


test.describe('authenticate',() =>{

// const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
// const VALID_USERNAME = process.env.USERNAME || 'mor_2314';
// const VALID_PASSWORD = process.env.PASSWORD || '83r5^_';
const BASE_URL = getRequiredUrl('API_BASE_URL').replace(/\/+$/, '');
const API_USERNAME = getRequiredEnv('API_USERNAME');
const API_PASSWORD = getRequiredEnv('API_PASSWORD');

test('POST - Verify authentication @master @api',async({request}) => {
    console.log(`username ${API_USERNAME} and password ${API_PASSWORD}`)
    const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`,{
        data : {
            username: API_USERNAME,
            password: API_PASSWORD
        }
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('token');
    expect(typeof responseBody.token).toBe('string');
    expect(responseBody.token.length).toBeGreaterThan(0);
    const token = responseBody.token;
     console.log(`User authenticated successfully using username ${API_USERNAME} and password ${API_PASSWORD} and got token as ${token}`)
})
})
