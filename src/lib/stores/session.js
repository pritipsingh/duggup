import { writable } from 'svelte/store';
import { browser } from '$app/environment'; // Only if you're using SvelteKit


export const content = writable('Follow');

if (browser && typeof window !== 'undefined' && window.localStorage) {

    const stored = localStorage.getItem('content') || 'Follow';
 
    content.set(stored);

  
    content.subscribe((value) => {
        localStorage.setItem('content', value);
    });
}


