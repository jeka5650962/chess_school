import * as myFunctions from "./modules/functions.js";
import * as myBurger from "./modules/burger.js";

myFunctions.isWebp();
myBurger.onBurger();

// core version + navigation, pagination modules:
import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
// configure Swiper to use modules
    modules: [Navigation, Pagination],
});