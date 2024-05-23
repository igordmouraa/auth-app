'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import signUp from '../../firebase/auth/signUp';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      // Handle the error appropriately (e.g., display an error message to the user)
      console.error(error);
    } else {
      // Successful signup
      console.log(result);
      router.push("/signIn"); 
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="w-full max-w-md space-y-4"> 
        <h1 className="text-3xl font-bold">Sign Up</h1>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <Button type="submit">Sign Up</Button>

          <Button 
            type="button" 
            variant="link" 
            onClick={() => router.push("/signIn")}
          >
            Sign In
          </Button>
        </form>
      </section>
    </div>
  );
}
