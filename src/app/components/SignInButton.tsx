"use client"

import { Button } from "@nextui-org/react"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

function SignInButton() {
    const {data: session} = useSession()
    return (
      <div className="flex items-center gap-2">
        {session && session.user ? (
          <>
            <p>{`${session.user.firstName} ${session.user.lastName}`}</p>

            <Link
              href={"/api/auth/signout"}
              className="text-sky-500 hover:text-sky-600 transition-colors"
            >
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Button onClick={() => signIn()}>Sign in</Button>

            <Button 
                as={Link} 
                href={"/auth/signup"}
            >Sign up</Button>
          </>
        )}
      </div>
    );
}

export default SignInButton