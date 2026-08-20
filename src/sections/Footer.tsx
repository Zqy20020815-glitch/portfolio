import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="px-6 py-16 lg:px-12 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            感谢阅览
          </h2>
          <a
            href="mailto:2683896243@qq.com"
            className="mt-6 inline-flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4"
          >
            2683896243@qq.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
