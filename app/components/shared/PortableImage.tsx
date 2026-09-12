import ImageComponent from "./ImageComponent";

type imageProp = {
  value: {
    alt?: string;
    caption?: string;
    url?: string;
    image?: string;
    lqip?: string;
  };
};

export default function SampleImageComponent({ value }: imageProp) {
  const src = value.url || value.image || "";

  if (!src) {
    return null;
  }

  return (
    <figure className="my-10">
      <ImageComponent
        src={src}
        alt={value.alt || ""}
        blurDataURL={value.lqip}
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
