import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Confetti } from '@/components/Confetti'
import { cn } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'
import { useEffect, useState } from 'react'

const AnimatedElement = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <>
      <Confetti />
      <div className="w-full max-w-3xl text-center flex flex-col items-center space-y-6 md:space-y-8 p-4 sm:p-6 md:p-8">
        <AnimatedElement delay={200}>
          <img
            src="https://img.usecurling.com/i?q=trophy&color=yellow&shape=fill"
            alt="Troféu Dourado"
            className="w-20 h-20 md:w-[120px] md:h-[120px] animate-pulse-trophy"
          />
        </AnimatedElement>

        <div className="space-y-4">
          <AnimatedElement delay={500}>
            <h1 className="text-[1.8rem] md:text-[2.5rem] font-semibold text-foreground">
              Olá!
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={700}>
            <p className="text-[2.2rem] leading-tight md:text-3xl font-bold text-primary">
              Parabéns pela decisão e bem-vindo(a) rumo ao topo! 🚀
            </p>
          </AnimatedElement>
          <AnimatedElement delay={900}>
            <p className="text-base md:text-[1.2rem] text-orange-500 font-semibold">
              Agora você pode acessar o Curso Everest e aproveitar todo o
              conteúdo já disponível!
            </p>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={1100} className="w-full pt-4">
          <div className="space-y-2 w-full">
            <p className="text-[0.9rem] md:text-[1.1rem] font-semibold text-foreground">
              Aqui estão seus dados de acesso:
            </p>
            <Card className="bg-muted w-full text-left shadow-subtle">
              <CardHeader className="p-5">
                <CardTitle className="text-base font-semibold">
                  Dados de Acesso
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Enviamos um e-mail para o endereço utilizado na compra com
                    seu login e senha provisórios para acessar a plataforma.
                  </p>
                  <div className="flex items-start gap-2.5 text-amber-800 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <AlertTriangle className="w-5 h-5 mt-px flex-shrink-0 text-amber-600" />
                    <p className="font-medium">
                      Importante: Verifique sua caixa de entrada, promoções e
                      também a pasta de spam!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1300} className="w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full">
            <Button
              asChild
              className="w-full sm:w-auto min-w-[240px] sm:min-w-[280px] h-12 md:h-14 text-base md:text-[1.1rem] bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold transition-transform hover:scale-[1.02] rounded-[10px] shadow-elevation"
            >
              <a
                href="https://chat.whatsapp.com/D3hgVDf0Rax5Y6wiBjL1PO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.usecurling.com/i?q=whatsapp&color=white"
                  alt="WhatsApp Icon"
                  className="w-6 h-6 mr-2.5"
                />
                Entrar no Grupo do WhatsApp
              </a>
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto min-w-[240px] sm:min-w-[280px] h-12 md:h-14 text-base md:text-[1.1rem] bg-telegram-blue hover:bg-telegram-blue/90 text-white font-semibold transition-transform hover:scale-[1.02] rounded-[10px] shadow-elevation"
            >
              <a
                href="https://t.me/+1wjcPlzeJCw2YzVh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.usecurling.com/i?q=telegram&color=white"
                  alt="Telegram Icon"
                  className="w-6 h-6 mr-2.5"
                />
                Entrar no Grupo do Telegram
              </a>
            </Button>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1500} className="w-full pt-8 md:pt-12">
          <div className="border-t w-full pt-8 md:pt-12 flex flex-col items-center text-center">
            <blockquote className="max-w-2xl text-base md:text-lg italic text-foreground">
              "Sua jornada para o sucesso começa agora. Estamos juntos nessa
              escalada!"
            </blockquote>
            <p className="mt-4 font-semibold text-foreground">
              Professor Tiago Costa
            </p>
            <p className="text-sm text-muted-foreground">
              Professor de Português e Redação
            </p>
          </div>
        </AnimatedElement>
      </div>
    </>
  )
}
