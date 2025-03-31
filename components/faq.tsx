"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqItems = [
    {
      question: "What is Base on Fun?",
      answer:
        "Base on Fun is a platform for launching and trading tokens on the Base blockchain. We provide tools for creators to launch tokens with built-in liquidity and earn perpetual revenue from trading volume.",
    },
    {
      question: "How do creators make money?",
      answer:
        "With Clanker tokens on Base on Fun, creators earn 0.4% of all trading volume. Unlike traditional tokens where creators buy supply to dump on holders, Clanker creators earn sustainable revenue from trading activity. For example, if your token does $1M in volume, you would earn around $4,000.",
    },
    {
      question: "Is my liquidity locked?",
      answer:
        "Yes, all tokens launched on Base on Fun have their initial liquidity permanently locked in the contract. This prevents rug pulls and creates a safer environment for traders.",
    },
    {
      question: "What blockchain does Base on Fun use?",
      answer:
        "Base on Fun operates on the Base blockchain, a layer 2 solution backed by Coinbase. Base offers fast transactions and low fees, making it ideal for token trading.",
    },
    {
      question: "How much does it cost to launch a token?",
      answer:
        "The cost to launch a token includes the network fees (typically around 0.003 ETH) plus your initial liquidity amount. The minimum recommended liquidity is 0.1 ETH.",
    },
  ]

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div
            className={cn(
              "p-5 flex justify-between items-center cursor-pointer transition-colors",
              activeIndex === index ? "bg-blue-50 text-primary" : "hover:bg-gray-50",
            )}
            onClick={() => toggleItem(index)}
          >
            <h3 className="font-semibold">{item.question}</h3>
            <Plus className={cn("h-5 w-5 transition-transform", activeIndex === index && "transform rotate-45")} />
          </div>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              activeIndex === index ? "max-h-96 p-5 pt-0" : "max-h-0",
            )}
          >
            <p className="text-gray-600 pt-4 border-t border-gray-100">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

