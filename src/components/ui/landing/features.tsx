"use client"

import { Card } from "@/components/ui/card";
import { features } from "@/lib/data";

export function Features() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.name} className="py-8 px-6">
            {/* Substitua este div por um elemento visual ou ícone */}
            <div className="rounded-full bg-blue-100 p-3" /> 
            <h3 className="mt-6 text-lg font-semibold leading-8">
              {feature.name}
            </h3>
            <p className="mt-4 text-base leading-7">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
