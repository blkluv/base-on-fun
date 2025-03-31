"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Share2, ExternalLink, BarChartIcon as ChartBar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatNumber } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"

export default function TokenPage({ params }: { params: { id: string } }) {
  const [buyAmount, setBuyAmount] = useState("")
  const [receiveAmount, setReceiveAmount] = useState("")

  // This would normally fetch data based on the ID
  const token = {
    id: params.id,
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
    description: "The easiest way to launch and trade tokens on Base.",
    price: 0.00042,
    holders: 156,
    contract: "0x1234567890abcdef1234567890abcdef12345678",
    isClanker: true,
  }

  const handleBuyAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setBuyAmount(value)

    // Calculate receive amount based on price
    if (value && !isNaN(Number.parseFloat(value))) {
      const calculatedAmount = Number.parseFloat(value) / token.price
      setReceiveAmount(calculatedAmount.toFixed(2))
    } else {
      setReceiveAmount("")
    }
  }

  const handleReceiveAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setReceiveAmount(value)

    // Calculate buy amount based on price
    if (value && !isNaN(Number.parseFloat(value))) {
      const calculatedAmount = Number.parseFloat(value) * token.price
      setBuyAmount(calculatedAmount.toFixed(6))
    } else {
      setBuyAmount("")
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to tokens
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={token.image || "/placeholder.svg"}
                    alt={token.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-500">{token.symbol}</div>
                  <h1 className="text-2xl font-bold">{token.name}</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={token.creator.avatar} />
                      <AvatarFallback>{token.creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-500">{token.creator.name}</span>
                    {token.creator.followers && (
                      <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
                        {token.creator.followers}
                      </span>
                    )}
                  </div>
                </div>
                <div className="ml-auto flex gap-2">
                  <Button variant="outline" size="sm" className="border-gray-200">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Explorer
                  </Button>
                </div>
              </div>

              {token.isClanker && (
                <div className="mt-4 p-3 bg-[#F5C249]/10 rounded-lg border border-[#F5C249]/20 flex items-center gap-2">
                  <span className="text-sm">💰</span>
                  <span className="text-sm">This is a Clanker token. Creator earns 0.4% of all trading volume.</span>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="text-xl font-bold">${token.price}</div>
                  <div className={`text-sm ${token.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {token.change >= 0 ? "+" : ""}
                    {token.change}%
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Market Cap</div>
                  <div className="text-xl font-bold">${formatNumber(token.marketCap)}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">24h Volume</div>
                  <div className="text-xl font-bold">${formatNumber(token.volume)}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Holders</div>
                  <div className="text-xl font-bold">{token.holders}</div>
                </div>
              </div>

              <div className="mt-8">
                <Tabs defaultValue="chart">
                  <TabsList className="bg-gray-100 w-full justify-start">
                    <TabsTrigger value="chart" className="data-[state=active]:bg-white">
                      Chart
                    </TabsTrigger>
                    <TabsTrigger value="trades" className="data-[state=active]:bg-white">
                      Trades
                    </TabsTrigger>
                    <TabsTrigger value="holders" className="data-[state=active]:bg-white">
                      Holders
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="chart" className="mt-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <ChartBar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Price chart would appear here</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="trades" className="mt-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-500 text-sm">
                            <th className="pb-2">Type</th>
                            <th className="pb-2">Price</th>
                            <th className="pb-2">Amount</th>
                            <th className="pb-2">Total</th>
                            <th className="pb-2">Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 text-green-500">Buy</td>
                            <td className="py-2">$0.00042</td>
                            <td className="py-2">10,000</td>
                            <td className="py-2">$4.20</td>
                            <td className="py-2 text-gray-500">2 mins ago</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-red-500">Sell</td>
                            <td className="py-2">$0.00041</td>
                            <td className="py-2">5,000</td>
                            <td className="py-2">$2.05</td>
                            <td className="py-2 text-gray-500">5 mins ago</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-green-500">Buy</td>
                            <td className="py-2">$0.00040</td>
                            <td className="py-2">20,000</td>
                            <td className="py-2">$8.00</td>
                            <td className="py-2 text-gray-500">10 mins ago</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="holders" className="mt-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-500 text-sm">
                            <th className="pb-2">Address</th>
                            <th className="pb-2">Amount</th>
                            <th className="pb-2">Percentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 text-primary">0x1234...5678</td>
                            <td className="py-2">500,000</td>
                            <td className="py-2">25%</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-primary">0xabcd...efgh</td>
                            <td className="py-2">300,000</td>
                            <td className="py-2">15%</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-primary">0x9876...5432</td>
                            <td className="py-2">200,000</td>
                            <td className="py-2">10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-4">Trade</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 text-sm">You pay</span>
                    <span className="text-gray-500 text-sm">Balance: 0.5 ETH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="0.0"
                      className="bg-transparent text-xl font-bold border-0 shadow-none focus-visible:ring-0 p-0 h-auto"
                      value={buyAmount}
                      onChange={handleBuyAmountChange}
                    />
                    <Button variant="outline" className="border-gray-300 bg-white">
                      ETH
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 text-sm">You receive</span>
                    <span className="text-gray-500 text-sm">~0 {token.symbol}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="0.0"
                      className="bg-transparent text-xl font-bold border-0 shadow-none focus-visible:ring-0 p-0 h-auto"
                      value={receiveAmount}
                      onChange={handleReceiveAmountChange}
                    />
                    <Button variant="outline" className="border-gray-300 bg-white">
                      {token.symbol}
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-blue-400 text-white">Connect Wallet</Button>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price</span>
                  <span>
                    1 {token.symbol} = ${token.price}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price Impact</span>
                  <span className="text-yellow-500">~2.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Max Slippage</span>
                  <span>0.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Network Fee</span>
                  <span>~$1.20</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{token.description}</p>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Contract</span>
                  <span className="text-primary truncate max-w-[150px]">{token.contract}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Token Standard</span>
                  <span>ERC-20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

