"use client"

interface GenovoLogoProps {
  className?: string
  size?: number
  showText?: boolean
  variant?: "full" | "icon-only"
}

export function GenovoLogo({ className = "", size = 32, showText = true, variant = "full" }: GenovoLogoProps) {
  if (variant === "icon-only") {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="relative" style={{ width: size, height: size }}>
          <img
            src="/images/genovo-logo.png"
            alt="Genovo Technologies"
            width={size}
            height={size}
            className="object-contain dark:invert"
          />
        </div>
      </div>
    )
  }

  // For full logo with text, calculate proportional dimensions
  const logoHeight = size
  const logoWidth = Math.round(size * 1.2)

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative" style={{ width: logoWidth, height: logoHeight }}>
        <img
          src="/images/genovo-logo.png"
          alt="Genovo Technologies"
          width={logoWidth}
          height={logoHeight}
          className="object-contain dark:invert"
        />
      </div>
    </div>
  )
}
