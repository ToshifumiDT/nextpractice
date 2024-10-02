import { foodData } from "../../data/food";  
import Image from "next/image";

export async function generateStaticParams() {
  const paths = foodData.map(food => ({
    food: food.name
  }));
  return paths;
}

export default function ProductPage({ params }) {
  const product = foodData.find(item => item.name === params.food);

  if (!product) {
    return <p>Not found</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={300} />
      <p>{product.description}</p>
    </div>
  );
}