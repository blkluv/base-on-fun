import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to tokens
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Launch a new token</h1>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Token Name*</label>
                <Input placeholder="My Awesome Token" className="bg-gray-800 border-gray-700" />
                <p className="text-xs text-gray-400 mt-1">Choose a memorable name for your token</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Token Symbol*</label>
                <Input placeholder="$TOKEN" className="bg-gray-800 border-gray-700" />
                <p className="text-xs text-gray-400 mt-1">Usually 3-5 characters, starting with $</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Token Logo</label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                  <p className="text-gray-400">Drag and drop an image, or click to browse</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG or GIF, max 2MB</p>
                  <Button variant="outline" className="mt-4 border-gray-700">
                    Upload Image
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  placeholder="Tell people about your token..."
                  className="bg-gray-800 border-gray-700 min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Initial Liquidity (ETH)*</label>
                <Input type="number" placeholder="0.1" className="bg-gray-800 border-gray-700" />
                <p className="text-xs text-gray-400 mt-1">Minimum 0.1 ETH required</p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <h3 className="font-medium mb-4">Advanced Settings</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Initial Supply</label>
                    <Input type="number" placeholder="1,000,000" className="bg-gray-800 border-gray-700" />
                    <p className="text-xs text-gray-400 mt-1">Default: 1,000,000 tokens</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Trading Fee (%)</label>
                    <Input type="number" placeholder="0.4" className="bg-gray-800 border-gray-700" />
                    <p className="text-xs text-gray-400 mt-1">Default: 0.4% (goes to creator)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <p className="text-sm">
                    By launching a token, you agree to our{" "}
                    <Link href="#" className="text-blue-400 hover:underline">
                      Terms of Service
                    </Link>
                    . Your token will be permanently locked with initial liquidity on Uniswap V3.
                  </p>
                </div>

                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Connect Wallet to Launch</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

