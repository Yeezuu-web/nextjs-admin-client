import { MainNav } from "@/components/main-nav";
import { redirect } from "next/navigation";
import { UserDropdown } from "./user-dropdown";

const Navbar = () => {
    return ( 
        <div className="border-b px-40 w-full">
            <div className="flex h-14 items-center px-4">
				{/* Logo */}
				<h4 className="scroll-m-20 text-red-700 text-xl font-semibold tracking-tight">
					W MEDIA
				</h4>
                <MainNav className="mx-20" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserDropdown />
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;