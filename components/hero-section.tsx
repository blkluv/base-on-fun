import { Rocket, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-16 md:py-20 px-4 md:px-6 bg-white rounded-xl shadow-sm mb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgwLCA4MiwgMjU1LCAwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F5F7FA] to-transparent"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent leading-tight">
          Create & Trade Fun Tokens on Base
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          The most fun and secure way to launch meme tokens on the Base network. Automatic liquidity, creator royalties,
          and anti-rug protection built in.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-blue-400 text-white hover:shadow-lg transition-all relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <Rocket className="h-5 w-5 mr-2" />
            Launch Your Token
          </Button>
          <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-blue-50">
            <Search className="h-5 w-5 mr-2" />
            Explore Tokens
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 p-6 bg-blue-50/80 rounded-xl border border-blue-100 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">10K+</div>
            <div className="text-sm text-gray-500">Tokens Launched</div>
          </div>
          <div className="text-center sm:border-l sm:border-r border-blue-200 px-6">
            <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">$50M+</div>
            <div className="text-sm text-gray-500">Trading Volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary flex items-center justify-center gap-2">5K+</div>
            <div className="text-sm text-gray-500">Daily Traders</div>
          </div>
        </div>
      </div>
    </section>
  )
}

