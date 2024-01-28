import { Link, Image } from "@nextui-org/react"
import SignUpForm from "../../components/SignUpForm"

function SignUpPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center">
      <div className="md:col-span-2 flex justify-center items-center">
        <p className="text-center p-2">Already Signed up?</p>
        <Link href={"/auth/signin"}>Sign In</Link>
      </div>

      <SignUpForm/>
      
      <Image 
        src="/login.png"
        alt="Login Form"
        width={500}
        height={500}
      />
    </div>
  )
}

export default SignUpPage 