"use client"

import type React from "react"

import { useState } from "react"
import { Info, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

export default function LaunchForm() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    supply: "1000000",
    liquidity: "0.1",
    description: "",
    imageUrl: "",
    tokenType: "clanker",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tokenType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStep(2)
  }

  const handleBack = () => {
    setFormStep(1)
  }

  const handleDeploy = () => {
    // Handle deployment logic
    alert("Token deployment would happen here!")
  }

  return (
    <div>
      {formStep === 1 ? (
        <form onSubmit={handleSubmit}>
          <Alert className="mb-6 bg-blue-50 border-blue-200">
            <AlertCircle className="h-4 w-4 text-blue-500" />
            <AlertDescription>
              All tokens launched on Base on Fun are automatically protected against rug pulls with locked liquidity.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2">
                Token Name
                <span className="text-gray-400 cursor-help" title="The full name of your token (e.g. BaseDoge)">
                  <Info className="h-4 w-4" />
                </span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. BaseDoge"
                className="mt-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="symbol" className="flex items-center gap-2">
                Token Symbol
                <span className="text-gray-400 cursor-help" title="Shorter ticker symbol (3-5 characters recommended)">
                  <Info className="h-4 w-4" />
                </span>
              </Label>
              <Input
                id="symbol"
                name="symbol"
                placeholder="e.g. BDOGE"
                className="mt-2"
                value={formData.symbol}
                onChange={handleChange}
                required
                maxLength={5}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="supply" className="flex items-center gap-2">
                Total Supply
                <span className="text-gray-400 cursor-help" title="Total number of tokens that will be created">
                  <Info className="h-4 w-4" />
                </span>
              </Label>
              <Input
                id="supply"
                name="supply"
                type="number"
                placeholder="e.g. 1000000"
                className="mt-2"
                value={formData.supply}
                onChange={handleChange}
                required
                min="1000"
              />
            </div>

            <div>
              <Label htmlFor="liquidity" className="flex items-center gap-2">
                Initial Liquidity (ETH)
                <span
                  className="text-gray-400 cursor-help"
                  title="Amount of ETH to provide for initial trading liquidity"
                >
                  <Info className="h-4 w-4" />
                </span>
              </Label>
              <Input
                id="liquidity"
                name="liquidity"
                type="number"
                placeholder="e.g. 0.1"
                className="mt-2"
                value={formData.liquidity}
                onChange={handleChange}
                required
                min="0.01"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="description" className="flex items-center gap-2">
              Token Description
              <span
                className="text-gray-400 cursor-help"
                title="Tell people what your token is about and why they should buy it"
              >
                <Info className="h-4 w-4" />
              </span>
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="The funniest meme token on Base with real utility..."
              className="mt-2"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="imageUrl" className="flex items-center gap-2">
              Token Image URL (Optional)
              <span
                className="text-gray-400 cursor-help"
                title="URL to an image that will represent your token (must be HTTPS)"
              >
                <Info className="h-4 w-4" />
              </span>
            </Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/your-token-image.png"
              className="mt-2"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <Label className="mb-2 block">Token Type</Label>
            <RadioGroup value={formData.tokenType} onValueChange={handleRadioChange}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="clanker" id="clanker" />
                <Label htmlFor="clanker">Clanker Token (0.4% creator fee)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard">Standard Token (no fee)</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-400 text-white">
            Continue to Preview →
          </Button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Fee includes smart contract deployment, verification, liquidity locking, and listing on our platform.
          </p>
        </form>
      ) : (
        <div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
            <h3 className="font-semibold text-primary flex items-center gap-2 mb-4">
              <Info className="h-5 w-5" />
              Token Launch Preview
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                    {formData.imageUrl ? (
                      <Image
                        src={formData.imageUrl || "/placeholder.svg"}
                        alt={formData.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{formData.symbol.charAt(1) || "T"}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold">{formData.name}</div>
                    <div className="text-sm text-gray-500">{formData.symbol}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-gray-500">Total Supply</div>
                    <div className="font-medium">{Number.parseInt(formData.supply).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Initial Liquidity</div>
                    <div className="font-medium">{formData.liquidity} ETH</div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="text-xs text-gray-500">Token Type</div>
                  <div className="font-medium">
                    {formData.tokenType === "clanker" ? "Clanker (0.4% creator fee)" : "Standard"}
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-gray-500">Description</div>
                  <div className="text-sm mt-1">{formData.description}</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-100/50 p-4 rounded-lg mt-6">
              <div className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Deployment Cost
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-sm">Base Network Fee</span>
                <span className="text-sm">~0.001 ETH</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-sm">Contract Deployment</span>
                <span className="text-sm">~0.002 ETH</span>
              </div>

              <div className="flex justify-between pt-2 border-t border-blue-200 mt-2 font-medium text-primary">
                <span>Total Cost</span>
                <span>~0.003 ETH + {formData.liquidity} ETH liquidity</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1" onClick={handleBack}>
              Back to Edit
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-primary to-blue-400 text-white" onClick={handleDeploy}>
              Deploy Token
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

