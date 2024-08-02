import BackPart from "./sections/backPart";
import ShopContent from "./sections/shopContent";
import damarli from '../../public/damarli.jpg'
import geisha from "../../public/geisha.jpg"
import relaxo from '../../public/relaxo.jpg'
import harpiaBig from "../../public/harpiaBig.jpg"
import harpia from "../../public/harpia.jpg"

export default function Shop(){
const shopProducts = [
    {
        id: 5,
        desc: "Product 1",
        price: 21,
cardImage:damarli,
mainDesc:"Cranberry juice, chocolate, panela",
mass: "340g"
    },
    {
        id: 6,
        desc: "Product 2",
        price: 55,
        cardImage:geisha,
        mainDesc:"Strawberry, cacabo nibs, sweet granadilla",
mass: "115g"
    },
    {
        id: 7,
       desc: "Product 3",
        price: 16,
        cardImage:relaxo,
        mainDesc:"Panela, orange, baker's chocolate",

mass: "340g",
    },
    {
        id: 8,
       desc: "Product 4",
        price: 80,
        cardImage:harpia,
        mainDesc:"Dark Chocolate, Toffee, Cherry, Walnut",

mass: "5lb Catuai - Caturra 50% Washed/ 50% Natural"
    },
    {
        id: 9,
       desc: "Product 5",
        price: 16,
        cardImage:harpiaBig,
          mainDesc:"Dark Chocolate, Toffee, Cherry, Walnut",
mass: "340g Catuai - Caturra, 50% washed - 50% natural"
    }
]





    return(
        <div className="shop">
          
           <BackPart/>
      
           <ShopContent products={shopProducts}/>
        </div>
    )
}