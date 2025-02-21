import type React from "react"
export function DumbellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 7v10" />
      <path d="M18 7v10" />
      <path d="M3 16h18" />
      <path d="M3 8h18" />
      <path d="M8 12h8" />
    </svg>
  )
}

