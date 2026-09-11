import Image from "next/image";

export default function Mark({ light = true }: { light?: boolean }) {
  return (
    <span className="w-8 h-8 shrink-0 relative">
      <Image
        src={light ? "/logo-mark-white.png" : "/logo-mark.png"}
        alt=""
        fill
        sizes="32px"
        className="object-contain"
      />
    </span>
  );
}
