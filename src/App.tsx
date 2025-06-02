import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Globe } from "lucide-react"

function CountdownTimer({ initialTime }: { initialTime: number }) {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}:${secs}`
  }

  if (timeLeft <= 0) {
    return <div className="text-xs text-red-400">Expired</div>
  }

  return <div className="text-xs text-[#19c0f4] font-mono">{formatTime(timeLeft)}</div>
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const stableStars = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }))
  }, [])

  const movingStars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => {
      const size = Math.floor(Math.random() * 3) + 1
      const left = Math.random() * 100
      const animationDelay = (Math.floor(Math.random() * 100) + 1) / 5 / size - 1000
      const animationDuration = (Math.floor(Math.random() * 1800) + 200) / 5 / size
      const twinkleDelay = (Math.floor(Math.random() * 100) + 1) / 10 - 50
      const twinkleDuration = (Math.floor(Math.random() * 450) + 50) / 10
      const red = Math.floor(Math.random() * 56) + 200
      const green = Math.floor(Math.random() * 106) + 150
      const blue = Math.floor(Math.random() * 156) + 100
      const alpha = (Math.floor(Math.random() * 4) + 7) / 10

      return {
        id: i,
        size,
        left: `${left}%`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${animationDuration}s`,
        twinkleDelay: `${twinkleDelay}s`,
        twinkleDuration: `${twinkleDuration}s`,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
      }
    })
  }, [])

  const memecoins = Array(9).fill({
    name: "Flappy Bird",
    symbol: "$FBD",
    creator: "Devmoa",
    marketCap: "4100.84",
    replies: "07",
    createdOn: "14-03-2024",
    avatar: "/placeholder.svg?height=40&width=40",
  })

  return (
    <div className="min-h-screen bg-[#000025] text-white relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stableStars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 bg-[#132043]">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#ffbb69] to-[#fac031] rounded-full flex items-center justify-center">
            <span className="text-[#000025] font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold">moonexpress.fun</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            How it works?
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#19c0f4] hover:bg-[#19c0f4]/10 rounded-full bg-[#21325E] w-9 h-9 flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#19c0f4] hover:bg-[#19c0f4]/10 rounded-full bg-[#21325E] w-9 h-9 flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </Button>
          </div>
          <Button
            className="w-[144px] h-[40px] rounded-[12px] shadow-[inset_0px_2px_2px_0px_#FFFFFF66] font-['Space_Grotesk'] font-bold text-[14px] leading-[79%] tracking-[-0.02em] text-white hover:brightness-110 hover:animate-gradient transition-all duration-300"
            style={{
              backgroundImage: "linear-gradient(96.13deg, #A130E0 -15.21%, #19C0F4 98.39%)",
              backgroundSize: "200% 200%",
            }}
          >
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-16 px-6 overflow-hidden">
        {/* Twinkling Moving Stars for Hero Section */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {movingStars.map((star) => (
            <div
              key={star.id}
              className="moving-star-container"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: star.left,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
              }}
            >
              <div
                className="moving-star"
                style={{
                  width: "inherit",
                  height: "inherit",
                  animationDelay: star.twinkleDelay,
                  animationDuration: star.twinkleDuration,
                  backgroundColor: star.backgroundColor,
                }}
              />
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative w-[576px] h-[576px] mx-auto">
                {/* Moon image */}
                <img src="/moon.svg" alt="Moon" className="absolute inset-0 w-full h-full object-contain" />

                {/* Rocket image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/rocket.png"
                    alt="Rocket"
                    className="w-64 h-64 object-contain animate-bounce-slow"
                    style={{ animationDuration: "6s" }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-['Space_Grotesk']">
                Memecoins Express
                <br />
                way to the Moon.
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-md">
                Turn your meme into a Supra sensation in 30 seconds, no code, no hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="text-white w-[150px] h-[40px] rounded-[12px] shadow-[inset_0px_2px_2px_0px_#FFFFFF66] text-sm hover:brightness-110 hover:animate-gradient transition-all duration-300"
                  style={{
                    backgroundImage: "linear-gradient(96.13deg, #A130E0 -15.21%, #19C0F4 98.39%)",
                    backgroundSize: "200% 200%",
                  }}
                >
                  Create Coin
                </Button>
                <Button
                  variant="outline"
                  className="border-[#19c0f4] text-[#19c0f4] bg-transparent hover:bg-white hover:text-black w-[155px] h-[40px] rounded-[12px] border text-sm transition-colors duration-300"
                  style={{
                    borderWidth: "1px",
                    borderColor: "#19C0F4",
                  }}
                >
                  How it works?
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memecoins Section */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-7xl mx-auto bg-[#0B152F] p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">3570</span>
              <span className="text-xl text-white/60">Memecoins</span>
            </div>

            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Input
                  placeholder="Search for Coins"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#21325e]/50 border-[#21325e] text-white placeholder:text-white/50 pr-12 w-full"
                />
                <Button className="absolute right-0 top-0 bottom-0 bg-[#19c0f4] hover:bg-[#16abd9] text-white rounded-l-none hover:brightness-110 transition-all duration-300">
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              <Select>
                <SelectTrigger className="bg-[#21325e]/50 border-[#21325e] text-white w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="market-cap">Market Cap</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Memecoins Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memecoins.map((coin, index) => (
              <Card
                key={index}
                className="bg-[#21325e]/30 border-[#21325e] backdrop-blur-sm hover:bg-[#21325e]/50 transition-colors duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex items-center p-6 mb-0">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={coin.avatar || "/placeholder.svg"} alt={coin.name} />
                        <AvatarFallback className="bg-[#ffbb69] text-[#000025]">FB</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-white">
                        {coin.name} ({coin.symbol})
                      </h3>
                    </div>
                  </div>

                  <div className="bg-[#21325e]/50 p-4 mx-4 rounded-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-white/60 mb-1">Symbol</div>
                        <div className="font-semibold text-white">{coin.symbol}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/60 mb-1">Market cap</div>
                        <div className="font-semibold text-white">{coin.marketCap}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/60 mb-1">Replies</div>
                        <div className="font-semibold text-white">{coin.replies}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#19c0f4] hover:bg-[#19c0f4]/10 w-8 h-8 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#19c0f4] hover:bg-[#19c0f4]/10 w-8 h-8 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#19c0f4] hover:bg-[#19c0f4]/10 w-8 h-8 transition-colors duration-300"
                      >
                        <Globe className="w-4 h-4" />
                      </Button>
                    </div>
                    <CountdownTimer initialTime={Math.floor(Math.random() * 86400) + 3600} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between p-6 border-t border-[#21325e]/30">
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#19c0f4] hover:bg-[#19c0f4]/10 rounded-full bg-[#21325E] w-9 h-9 flex items-center justify-center transition-colors duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#19c0f4] hover:bg-[#19c0f4]/10 rounded-full bg-[#21325E] w-9 h-9 flex items-center justify-center transition-colors duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </Button>
        </div>
        <div className="text-sm text-white/60">All right reserved @moonexpress.fun</div>
      </footer>
    </div>
  )
}