import chinesefoods from '../Images/chinese1.jpeg';
import family from '../Images/dinnerspecial.jpg';
import indian from '../Images/indian.jpg';
import korean from '../Images/korean1.jpeg';
import mexican from '../Images/mexican.jpg';
import special from '../Images/restrauntk.jpg';
import sea from '../Images/seefood2.jpg';
import wine from '../Images/wine6.jpg';
import dessert from '../Images/dessertspecial.jpeg';

 const menuData = [
    {
        id:1,
        category:"Chinesefoods",
        image:chinesefoods,
        text: "Enjoy our in house chinese food that was prepared passinately just for you! Welcome again and again ",
    },
     {
         id:2,
         category:"FamilyDinner",
         image:family,
         text:"Come one,come all with friends and family and enjoy a whole buffet just for you.Enjoy!",
     },
     {
         id:3,
         category:"Indianfoods",
         image:indian,
         text:"Introducing some scrumptious indian spicy food just for you and you.Place an order!",
     },
     {
         id:4,
         category:"Koreanfoods",
         image:korean,
         text:"We have currently added some korean food onto our menu after lots of customer demands. Place your order now for a great experience.",
     },
     {
        id:5,
        category:"Mexicanfoods",
        image:mexican,
        text:"Best made mexican tacos that will leave you with the best tacos experience that you have never had.",
     },
     {
         id:6,
         category:"LaCafe Special",
         image:special,
         text:"Special meal is our all time cafe recommendation. Come one come all and enjoy our in house special.",
    },
    {
        id:7,
        category:"Seafoods",
        image:sea,
        text:"You will definitely enjoy our diversified sea food that we prepare with our secret ingridients",
    },
    {
        id:8,
        category:"Frenchculinary",
        image:wine,
        text:"Enjoy our special house recommended wine for going along with the scrumptious meal you just had."
    },
    {
        id:9,
        category:"LaCafe Dessert",
        image:dessert,
        text:"Place dessert order to leave you feeling full and satisfied for the day! ",
    }
];

 export default menuData;