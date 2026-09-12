import Image from "next/image";

type imageProp = {
  src: string;
  alt: string;
  blurDataURL?: string;
};

export default function ImageComponent({ src, alt, blurDataURL }: imageProp) {
  return (
    <Image
      className="rounded-sm object-contain object-left-top aspect-auto duration-300"
      src={src}
      alt={alt}
      loading="lazy"
      width={1920}
      height={1080}
      placeholder={blurDataURL ? "blur" : "empty"}
      quality={100}
      sizes="100vw"
      blurDataURL={blurDataURL}
    />
  );
}
