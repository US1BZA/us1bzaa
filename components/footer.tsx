"use client"

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Islamic Message in Russian */}
          <div className="space-y-2">
            <p className="text-lg font-semibold text-foreground">Несомненно, Ислам возвысится</p>
            <p className="text-base text-muted-foreground">
              Несомненно, мы будем справедливо править тысячелетиями ради Ислама
            </p>
          </div>

          {/* Quranic Verse */}
          <div className="pt-4 border-t w-full max-w-2xl space-y-2">
            <p className="text-sm font-medium text-primary">Сура Аз-Зумар, 39:36</p>
            <p className="text-sm text-muted-foreground italic">
              «Разве Аллаха не достаточно Его рабу? Они пугают тебя теми, которые помимо Него. А кого Аллах введет в
              заблуждение, тому не будет наставника на прямой путь.»
            </p>
          </div>

          {/* Ellipsis */}
          <div className="pt-4">
            <p className="text-2xl text-muted-foreground/50">...</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
