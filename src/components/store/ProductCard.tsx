interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <div className="w-full flex flex-col">
      <img src={image} alt={name + ' image'} className="w-full md:max-h-[30rem] object-contain" />
      <h5 className="text-black font-bold text-lg hover:underline">{name}</h5>
      <p>$ {price.toFixed(2)} USD</p>
    </div>
  );
};

export default ProductCard;
