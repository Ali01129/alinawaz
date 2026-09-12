type props = {
  text: React.ReactNode;
  event?: () => void;
};

export const slugify = (id: unknown) => {
  if (!id) return "";
  return id
    .toString()
    .toLowerCase()
    .replaceAll(/[^-\w]+/g, "-")
    .replaceAll(/--+/g, "-")
    .replace(/^-|-$/g, "");
};

// Render heading text without wrapping in <a>, so PortableText link marks
// inside headings do not create nested anchors.
export default function HashScroll({ text, event }: props) {
  return (
    <span onClick={event} className="cursor-pointer">
      {text}
    </span>
  );
}
