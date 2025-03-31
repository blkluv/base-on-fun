import Image from "next/image"
import Link from "next/link"
import { BarChartIcon as ChartBar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { formatNumber } from "@/lib/utils"

interface TokenGridProps {
  activeTab: string
  searchQuery: string
}

export default function TokenGrid({ activeTab, searchQuery }: TokenGridProps) {
  const tokens = [
    {
      id: 1,
      symbol: "$BASEFUN",
      name: "Base Fun",
      image: "/placeholder.svg?height=200&width=200",
      marketCap: 125640,
      change: 0.73,
      volume: 117050,
      creator: {
        name: "basefun",
        avatar: "/placeholder.svg?height=40&width=40",
        followers: 105,
      },
      daysAgo: 13,
      isClanker: true,
      isHot: true,
      isNew: false,
    },
    {
      id: 2,
      symbol: "$MUPPET",
      name: "Muppets Season",
      image: "/placeholder.svg?height=200&width=200",
      marketCap: 76480,
      change: 16.87,
      volume: 117050,
      creator: {
        name: "muppetonbase",
        avatar: "/placeholder.svg?height=40&width=40",
        followers: 198,
      },
      daysAgo: 4,
      isClanker: true,
      isHot: false,
      isNew: false,
    },
    {
      id: 3,
      symbol: "$AY",
      name: "andrewyang coin",
      image: "/placeholder.svg?height=200&width=200",
      marketCap: 125430,
      change: 5.74,
      volume: 497310,
      creator: {
        name: "0xce37",
        avatar: "/placeholder.svg?height=40&width=40",
        followers: null,
      },
      daysAgo: 0,
      hoursAgo: 9,
      isClanker: true,
      isHot: false,
      isNew: true,
    },
    {
      id: 4,
      symbol: "$FARTCOIN",
      name: "Based Fartcoin",
      image: "/placeholder.svg?height=200&width=200",
      marketCap: 28800000,
      change: -1.63,
      volume: 345710,
      creator: {
        name: "fartguy",
        avatar: "/placeholder.svg?height=40&width=40",
        followers: 23,
      },
      daysAgo: 90, // 3 months
      isClanker: false,
      isHot: false,
      isNew: false,
    },
    {
      id: 5,
      symbol: "$AIR",
      name: "AIRCADE",
      image: "/placeholder.svg?height=200&width=200",
      marketCap: 138280,
      change: -1.81,
      volume: 57150,
      creator: {
        name: "0x18d0",
        avatar: "/placeholder.svg?height=40&width=40",
        followers: null,
      },
      daysAgo: 3,
      isClanker: false,
      isHot: false,
      isNew: false,
    },
    {
      id: 6,
      symbol: "$TAB",
      name: "tab",
      image: "/placeholder.svg?height=200&width=200",
      marketCap: 199910,
      change: 9.36,
      volume: 36580,
      creator: {
        name: "carlos",
        avatar: "/placeholder.svg?height=40&width=40",
        followers: 10000,
      },
      daysAgo: 4,
      isClanker: true,
      isHot: true,
      isNew: false,
    },
  ]

  // Filter tokens based on active tab and search query
  const filteredTokens = tokens.filter((token) => {
    // Filter by tab
    if (activeTab === "clankers" && !token.isClanker) return false
    if (activeTab === "trending" && !token.isHot) return false
    if (activeTab === "new" && !token.isNew) return false
    if (activeTab === "gainers" && token.change <= 0) return false

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return token.name.toLowerCase().includes(query) || token.symbol.toLowerCase().includes(query)
    }

    return true
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTokens.map((token) => (
        <Link href={`/token/${token.id}`} key={token.id} className="block">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:translate-y-[-5px] relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-blue-400"></div>

            {/* Badges */}
            <div className="absolute top-4 right-4 flex gap-2">
              {token.isClanker && (
                <span className="bg-[#F5C249] text-black text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                  💰 Clanker
                </span>
              )}
              {token.isHot && (
                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                  🔥 Hot
                </span>
              )}
              {token.isNew && (
                <span className="bg-[#FF58BF] text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                  🆕 New
                </span>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={token.image || "/placeholder.svg"}
                    alt={token.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{token.name}</h3>
                  <div className="text-gray-500 text-sm">{token.symbol}</div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Market cap</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${formatNumber(token.marketCap)}</span>
                    <span className={`text-xs ${token.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {token.change >= 0 ? "+" : ""}
                      {token.change}%
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">24h Volume</span>
                  <span className="font-medium">${formatNumber(token.volume)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Creator</span>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={token.creator.avatar} />
                      <AvatarFallback>{token.creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{token.creator.name}</span>
                    {token.creator.followers && (
                      <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                        {token.creator.followers > 999
                          ? `${(token.creator.followers / 1000).toFixed(0)}k`
                          : token.creator.followers}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1 bg-primary text-white hover:bg-primary/90">Buy</Button>
                <Button variant="outline" className="flex-1 border-gray-200 bg-gray-50 text-primary hover:bg-gray-100">
                  <ChartBar className="h-4 w-4 mr-1" />
                  Chart
                </Button>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                {token.hoursAgo !== undefined && token.hoursAgo < 24
                  ? `${token.hoursAgo} hours ago`
                  : token.daysAgo === 90
                    ? "3 months ago"
                    : `${token.daysAgo} days ago`}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

