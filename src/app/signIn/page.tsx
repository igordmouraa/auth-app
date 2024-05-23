'use client'

import { useState, FormEvent } from "react";
import { FirebaseError } from "firebase/app";
import signIn from "../../firebase/auth/signIn";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null); // Clear previous errors
        try {
            const { result, error } = await signIn(email, password);

            if (error) {
                const firebaseError = error as FirebaseError;
                setError(firebaseError.message || 'Unknown Error');
            } else {
                console.log(result);
                router.push("/dashboard");
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An unexpected error occurred.');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <section className="w-full max-w-md space-y-4">
                <h1 className="text-3xl font-bold">Sign In</h1>

                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

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

                    <Button type="submit">Sign In</Button>

                    <Button
                        type="button"
                        variant="link"
                        onClick={() => router.push("/signUp")}
                    >
                        Sign Up
                    </Button>
                </form>
            </section>
        </div>
    );
}

export default SignIn;
