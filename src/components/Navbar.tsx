import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex md:py-5 py-2 px-4 md:px-20 bg-background justify-between items-center ">
      <div className="flex justify-center items-center gap-4">
        <img
          src="/logo/tsu-logo.webp"
          alt="tsu-logo"
          className="h-12 w-12 md:h-24 md:w-24"
        />
        <h1 className="text-lg md:text-4xl ">
          Tarlac State <br className="hidden md:block" /> University
        </h1>
      </div>
      {/* mobile navigation */}
      <div className="hover:bg-muted rounded-md p-1 md:hidden">
        <Menu className="h-8 w-8" />
      </div>

      <div>

      </div>
    </nav>
  );
};


const navList = {

}

export default Navbar;
