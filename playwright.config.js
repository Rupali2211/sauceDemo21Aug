import {defineConfig} from '@playwright/test';
import env from './env/env.config.js';
export default defineConfig({
    testDir:'./tests',
    use:
    {   baseURL:env.BASE_URL,
        headless:false
    },
    projects:[
        {
            name:'chromium',
            use:
            {
                browserName:'chromium'
            }
        },

        {
            name:'firefox',
            use:
            {
                browserName:'firefox'
            }
        },

        {
            name:'webkit',
            use:
            {
                browserName:'webkit'
            }
        }


    ]


});


