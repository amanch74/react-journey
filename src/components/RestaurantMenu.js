import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4885006&lng=77.2961612&restaurantId=" + resId + "&submitAction=ENTER");
        const json = await data.json();
        console.log(resId);

        
        // console.log(json);
        setResInfo(json?.data);
        // setResInfo(json?.data.cards[2]?.card?.card?.info);
    }


    useEffect(() => {
        fetchMenu();
    }, []);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwo, avgRating } = resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    // console.log(itemCards);
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>

            <br></br>

            <h3>{cuisines.join(", ")}</h3>
            <br></br>

            <ul>
                {itemCards.map((item) => 
                <li key = {item.card.info.id}>
                    {item.card.info.name} - {item.card.info.description}<br></br>
                    Rs. {item.card.info.price/100} <br></br>
                    <br></br>
                    
                </li>)}
            </ul>

            <h4>Cost for two {  costForTwo/100}</h4>

            <h4>Average Rating {avgRating}</h4>

            
        </div>
    )
}

export default RestaurantMenu;