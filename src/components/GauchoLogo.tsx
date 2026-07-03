import Image from "next/image"

export default function GauchoLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/gaucho-logo.png"
      alt="Niño Gaucho"
      width={48}
      height={48}
      className={`object-contain ${className}`}
      priority
    />
  )
}
