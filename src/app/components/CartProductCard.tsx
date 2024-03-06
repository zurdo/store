import { NewCartItem, useCart } from "@/hooks/useCart";
import { TrashLogo } from "@/lib/Logos";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CartProductCard({ cartItem }: { cartItem: NewCartItem }) {
  const {
    color,
    description,
    discount,
    id,
    imagesArray,
    key,
    name,
    price,
    quantity,
    type,
    colorArray,
    priceDiscounted,
  } = cartItem;
  const { removeProduct } = useCart();
  const cartItemPrice = priceDiscounted * quantity;
  const handleDelete = () => {
    removeProduct(key);
  };
  return (
    <article className="flex h-full flex-row">
      <Link href={`/productos/${id}`}>
        <div className="min-w-24 max-w-24">
          <Image
            src={imagesArray[0]}
            width={1400}
            height={1800}
            className="h-auto w-full overflow-clip"
            alt={name}
          />
        </div>
      </Link>
      <div className="flex w-full flex-col justify-between pl-3">
        <Link href={`/productos/${id}`}>
          <div className="flex flex-col items-start">
            <h3>{name}</h3>
            <p className="text-sm">
              {formatPrice(cartItemPrice)}
              <span className="ml-2 border px-[1px] text-[10px]">{discount}% OFF</span>
            </p>
          </div>
        </Link>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm">
              Color: <span>{color.toLowerCase()}</span>
            </p>
            <p className="text-sm">
              Cantidad: <span>{quantity}</span>
            </p>
          </div>
          <button onClick={handleDelete}>
            <TrashLogo />
          </button>
        </div>
      </div>
    </article>
  );
}
