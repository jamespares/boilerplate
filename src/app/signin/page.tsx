"use client"

import { signIn } from "next-auth/react"
import { Github } from "lucide-react"

export default function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="flex w-full justify-center items-center gap-2 rounded-md bg-gray-900 dark:bg-gray-700 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <Github className="h-5 w-5" />
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 