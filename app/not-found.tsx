import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-muted-foreground">Could not find requested resource</p>
      <Link href="/" className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
        Return Home
      </Link>
    </div>
  )
}

