import clsx from "clsx";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});

import Typography from "./Typography";

interface Props {
  className: string;
}

const Logo = ({
  className
}: Props) => {
  return (
    <Typography variant="body" className={clsx('font-bold cursor-pointer', imperial.className, className)}>
      Pedal&Stride
    </Typography>

  )
}

export default Logo