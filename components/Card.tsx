import Link from 'next/link'
import Image from './Image'
import Typography from './Typography'
import { SanityImage } from '@/interfaces/Sanity';
import { ReactNode } from 'react';

interface Props {
  link: string;
  title: string;
  children: ReactNode;
  image?: SanityImage;
}

const Card = ({
  link,
  title,
  image,
  children,
}: Props) => {
  return (
    <Link
      href={link}
      className="block p-5 rounded-2xl shadow-lg hover:shadow-2xl transition"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
      )}
      <Typography variant="h4" className="mt-4 font-semibold text-xl">{title}</Typography>
      {children}
    </Link>
  )
}

export default Card