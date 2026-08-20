import { ImageFrame } from "./ImageFrame";

export function LocalClip({ src }: { src: string }) {
  return (
    <ImageFrame className="aspect-[4/3]">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    </ImageFrame>
  );
}
