"use client"

import { CircleDot, TrendingUp, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("live")

  const tabs = [
    { id: "live", label: "Live", icon: <CircleDot className="h-4 w-4 text-green-500" /> },
    { id: "top", label: "Top", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "new", label: "New", icon: <Sparkles className="h-4 w-4" /> },
  ]

  return (
    <div className="flex gap-6 mb-6 border-b border-gray-800 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex items-center gap-2 py-2 px-1 text-sm font-medium",
            activeTab === tab.id ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white",
          )}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

