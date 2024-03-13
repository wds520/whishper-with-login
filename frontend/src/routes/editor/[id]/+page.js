/*
 * @Author: wds
 * @Date: 2024-03-06 21:09:09
 * @LastEditors: wds
 * @LastEditTime: 2024-03-13 22:16:06
 */
/** @type {import('./$types').PageLoad} */
import { currentTranscription, storeToken } from '$lib/stores';
// console.log("🚀 ~ storeToken:", localStorage)
import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

export async function load({params}) {
    console.log(localStorage, 'localstorage page')
    // Fetch json from /api/transcriptions/{id}
    let id = params.id;
    // Use different endpoints for server-side and client-side
    const endpoint = browser ? `${env.PUBLIC_API_HOST}/api/transcriptions` : `${env.PUBLIC_INTERNAL_API_HOST}/api/transcriptions`;
    const response = await fetch(`${endpoint}/${id}`, {headers: {Authorization: localStorage.getItem('token')}});
    const ts = await response.json();
    // Set currentTranscription to the fetched transcription
    currentTranscription.set(ts);
};