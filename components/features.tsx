import { Lock, DollarSign, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      emoji: "🔒",
      title: "Rug-Pull Protection",
      description:
        "Initial liquidity is automatically locked in our contract to prevent malicious creators from withdrawing funds.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      emoji: "💰",
      title: "Creator Revenue",
      description: "Earn 0.4% of all trading volume perpetually. The more your token trades, the more you earn.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      emoji: "⚡",
      title: "Base Network",
      description: "Ultra-low fees and instant transactions on Coinbase's scalable layer 2 blockchain.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:translate-y-[-5px]"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white text-xl mb-6">
            {feature.emoji}
          </div>
          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

