"use client";
import Image from "next/image";

interface FullscreenImageProps {
  src?: string;
  alt?: string;
  onClose: () => void;
}

export default function FullscreenImage({
  src,
  alt,
  onClose,
}: FullscreenImageProps) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90">
      <div className="absolute top-10 right-10 ">
        <button
          className="absolute top-4 right-4 opacity-100"
          onClick={onClose}
        >
          <span className=" text-white text-lg"> X </span>
        </button>
      </div>
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={1200}
        height={900}
        className="rounded-lg max-h-[90vh] max-w-[90vw] object-contain"
        style={{ boxShadow: "0 0 40px #000" }}
      />
    </div>
  );
}
