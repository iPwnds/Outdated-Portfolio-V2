import { inject } from '@vercel/analytics';
import { createApp } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
 
inject();

createApp(Header).mount('#header');
createApp(Footer).mount('#footer');


const bd = new Date('October 17, 2005')
const cd = new Date()

const d = cd.getDate() - bd.getDate()
const m = cd.getMonth() - bd.getMonth()
let age = cd.getFullYear() - bd.getFullYear()

if (m < 0 || (m === 0 && d < 0)) {
    age--
}

document.getElementById('age').innerText = age.toString()