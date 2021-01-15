import axios from 'axios';

const getBanners = () => axios.get('http://ec2-54-237-155-186.compute-1.amazonaws.com/api/sections/home');
const getFooterBanner = () => axios.get('http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg');

export default { getBanners, getFooterBanner };