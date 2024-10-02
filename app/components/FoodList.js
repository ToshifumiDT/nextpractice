import Link from "next/link";
import Image from "next/image";
import { foodData } from "../data/food";

const FoodList = () => {
  return (
    <div className="food-list">
      {foodData.map((food) => (
        <div key={food.id} className="food-item">
          <Link href={`/products/${food.name}`}>
            <Image src={food.image} alt={food.name} width={200} height={150} />
            <h2>{food.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
