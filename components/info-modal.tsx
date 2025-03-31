import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function InfoModal() {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-md bg-black border border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Launch and trade the hottest coins on Base.</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Image src="/logo.png" alt="Base on Fun" width={24} height={24} className="rounded-full" />
            </div>
            <p className="text-sm text-gray-300">
              Every coin immediately launches as an ERC-20 on Uniswap V3 with perma-locked single-sided LP powered by
              Clanker.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Image src="/logo.png" alt="Base on Fun" width={24} height={24} className="rounded-full" />
            </div>
            <p className="text-sm text-gray-300">
              Creators earn ~0.4% of trading volume via LP fees. Launched a coin that trades $1m volume? You earn around
              $4k in fees.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Image src="/logo.png" alt="Base on Fun" width={24} height={24} className="rounded-full" />
            </div>
            <p className="text-sm text-gray-300">
              Every trade bumps a coin to the front page. Share trades made on Base on Fun and earn 0.5% off every
              copytrade.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Image src="/logo.png" alt="Base on Fun" width={24} height={24} className="rounded-full" />
            </div>
            <p className="text-sm text-gray-300">
              hold <span className="text-blue-400">$basefun</span> to launch on Base on Fun for free.
            </p>
          </div>

          <div className="pt-2">
            <Link href="#" className="text-blue-400 text-sm hover:underline">
              Learn more about Base on Fun
            </Link>
            <div className="mt-1">
              <Link href="#" className="text-blue-400 text-sm hover:underline">
                Join our 14k TG community
              </Link>
            </div>
          </div>

          <Button className="w-full bg-white text-black hover:bg-gray-200 mt-4">Start trading</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

