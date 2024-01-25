import {Navbar, NavbarContent, NavbarItem, Button, Link} from "@nextui-org/react"
// import SignInButton from "./SignInButton"

export default function Appbar(){
    return (
        <Navbar isBordered>
            <NavbarContent 
                className="hidden sm:flex gap-4"
                justify="center"
            >
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/"
                        className="hover:text-sky-500 transition-colors"
                    >Home</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                   {/* <SignInButton/>    */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}