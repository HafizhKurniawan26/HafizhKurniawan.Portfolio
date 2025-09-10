import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface RoundedCardProps {
  title: string;
  img?: string;
}

const RoundedCard: React.FC<RoundedCardProps> = ({ title, img }) => {
  return (
    // create animation when hover
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col justify-center items-center gap-2"
    >
      <div className="rounded-full w-16 h-16 md:w-20 md:h-20 flex">
        {img && (
          <Image
            src={img}
            alt={title}
            width={80}
            height={80}
            className="rounded-full p-0.5"
          />
        )}
      </div>
      <p>{title}</p>
    </motion.div>
  );
};

export default RoundedCard;
