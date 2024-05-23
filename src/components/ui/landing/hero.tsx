// components/landing/hero.tsx

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export function Hero() {
const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Login com Firebase
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Uma breve descrição do seu produto ou serviço. Destaque seus principais benefícios e valor.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Button size="lg" onClick={() => router.push("/signUp")}>Começar Agora</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
