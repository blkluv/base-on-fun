"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import TokenGrid from "@/components/token-grid"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LaunchForm from "@/components/launch-form"
import Features from "@/components/features"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <HeroSection />

        <section id="features" className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
            ✨ Why Launch With Us
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded"></span>
          </h2>
          <Features />
        </section>

        <section id="trending" className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
            🔥 Trending Tokens
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded"></span>
          </h2>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search by name or symbol..."
                  className="pl-10 bg-white border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 bg-white">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                  All Tokens
                </TabsTrigger>
                <TabsTrigger value="clankers" onClick={() => setActiveTab("clankers")}>
                  💰 Clankers
                </TabsTrigger>
                <TabsTrigger value="trending" onClick={() => setActiveTab("trending")}>
                  📈 Trending
                </TabsTrigger>
                <TabsTrigger value="new" onClick={() => setActiveTab("new")}>
                  🆕 New
                </TabsTrigger>
                <TabsTrigger value="gainers" onClick={() => setActiveTab("gainers")}>
                  📊 Gainers
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <TokenGrid activeTab={activeTab} searchQuery={searchQuery} />
        </section>

        <section id="launch" className="my-16">
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
              🚀 Create Your Token
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded"></span>
            </h2>

            <div className="flex items-start gap-5 p-6 bg-blue-50 rounded-xl border border-blue-100 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white text-xl flex-shrink-0">
                💰
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Clanker Token Feature</h3>
                <p className="text-gray-600">
                  With Clanker tokens, you earn 0.4% of all trading volume permanently. No need to buy your own supply
                  upfront - just create, promote, and earn from volume. Creators have earned over $1.2M from trading
                  fees so far!
                </p>
              </div>
            </div>

            <LaunchForm />
          </div>
        </section>

        <section id="faq" className="my-16">
          <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
            ❓ Frequently Asked Questions
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded"></span>
          </h2>

          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  )
}

