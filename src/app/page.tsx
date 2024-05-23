'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Hero } from "@/components/ui/landing/hero"
import { Features } from "@/components/ui/landing/features"
import { useRouter } from 'next/navigation';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      <Separator className="my-8" />

      {/* Features Section */}
      <Features />

      <Separator className="my-8" />

      {/* Testimonials (Example) */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Nome do Cliente</CardTitle>
              <CardDescription>Cargo do Cliente</CardDescription>
            </CardHeader>
            <CardContent>
              "Este produto mudou completamente a forma como trabalhamos. É incrível!"
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Outro Cliente Feliz</CardTitle>
              <CardDescription>CEO da Empresa X</CardDescription>
            </CardHeader>
            <CardContent>
              "Nunca vi um serviço tão eficiente e fácil de usar. Recomendo a todos!"
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
