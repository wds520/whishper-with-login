/*
 * @Author: wds
 * @Date: 2024-03-06 21:09:09
 * @LastEditors: wds
 * @LastEditTime: 2024-03-13 22:12:42
 */
import { transcriptions, storeToken } from '$lib/stores';
import { browser, dev } from '$app/environment';
import { env } from '$env/dynamic/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    // Use different endpoints for server-side and client-side
    if (browser && localStorage.getItem('token')) {
        const endpoint = browser ? `${env.PUBLIC_API_HOST}/api/transcriptions` : `${env.PUBLIC_INTERNAL_API_HOST}/api/transcriptions`;
        
                console.log('走有token', localStorage.getItem('token'))

                // const response = await fetch(endpoint, {
                //     headers : {
                //         Authorization: localStorage.getItem('token') 
                //     }
                // })
                // const ts = await response.json()
    
                    // if (ts) {
                    //     transcriptions.update(_ => ts.length > 0 ? ts : []);
                    // } else {
                    //     transcriptions.update(_ => []);
                    // }


        
        
    } else {
        console.log('无token')
        transcriptions.update(_ => []);
        // localStorage.setItem('token', '')
    }
      
}