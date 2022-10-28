import { Envelope, Lock } from "phosphor-react";
import {
  Button,
  Checkbox,
  Heading,
  Logo,
  Text,
  TextInput,
} from "./components/widgets";

export function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center mb-10">
        <Logo className="mb-4" />

        <Heading size="lg" className="mb-2" asChild>
          <h1>C6R Design System</h1>
        </Heading>

        <Text size="lg" className="text-gray-400">
          Login and start to use!
        </Text>
      </header>

      <form className="w-full max-w-[400px]">
        <label className="mb-3 flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" placeholder="johndoe@example.com" />
          </TextInput.Root>
        </label>

        <label className="mb-4 flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label className="mb-8 flex items-center gap-2">
          <Checkbox />

          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button className="mb-8">Enter the platform</Button>

        <footer className="flex flex-col items-center gap-3">
          <Text
            size="sm"
            className="text-gray-400 underline hover:text-gray-200 transition-colors"
            asChild
          >
            <a href="">Forgot your password?</a>
          </Text>

          <Text
            size="sm"
            className="text-gray-400 underline hover:text-gray-200 transition-colors"
            asChild
          >
            <a href="">Does not have an account? Sign up now!</a>
          </Text>
        </footer>
      </form>
    </div>
  );
}
