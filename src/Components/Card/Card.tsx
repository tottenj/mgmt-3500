import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import styles from "./card.module.css"
import Link from "next/link";

interface cardsProps{
  text: string
  image: string
  link: string
}



export default function Cards({text, image, link}: cardsProps) {
  return (
    <div className="flex flex-col w-1/5 bg-blue-300 h-1/2">
      <div className="block  pb-3 pl-3 pr-3 rounded-xl hover:scale-110 transition-all flex-wrap h-auto">
        <Link href={link}>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className={`${styles.text} `}>{text}</p>
            </CardHeader>
            <CardBody>
              <div className="w-auto">
                <Image alt="Card background" className="object-cover rounded-xl ml-auto mr-auto" src={image} width={300} />
              </div>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
}
