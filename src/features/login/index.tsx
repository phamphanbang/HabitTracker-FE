import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        {/* Header */}
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            My Awesome App
          </CardTitle>
          <CardDescription className="text-center">
            Hello! Welcome back 👋
          </CardDescription>
        </CardHeader>

        {/* Form */}
        <CardContent>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>

            <Button className="w-full">Login</Button>
          </div>

          {/* Divider */}
          <div className="my-6">
            <Separator />
            <p className="text-center text-sm text-gray-500 mt-2">
              or login with
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 flex items-center gap-2"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center gap-2"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </Button>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My Awesome App
        </CardFooter>
      </Card>
    </div>
  );
}
