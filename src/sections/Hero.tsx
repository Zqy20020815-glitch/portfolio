import { Mail, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-12 md:pt-32 md:pb-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <div className="flex flex-col gap-8 md:flex-1">
            <div className="flex items-center gap-6">
              <img
                src="/avatar.png"
                alt="Qingyu, Zheng"
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-border md:h-28 md:w-28"
              />
              <div>
                <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-1">
                  Hello, I’m
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  Qingyu,Zheng
                </h1>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
              27届，中国美术学院-工业设计研究专业硕士在读，注重用户洞察与视觉发散。
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end md:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              UX/UI求职中
            </div>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:2683896243@qq.com"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                2683896243@qq.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                浙江杭州/北京
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
              拥有扎实的用户研究与系统化设计基础。擅长将复杂的业务逻辑与用户需求转化为清晰、优雅的交互流程，习惯用数据与用户反馈驱动设计决策，具备极强的快速学习与复盘能力。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
