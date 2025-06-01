'use client';

import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const navItemClasses = "text-menu-item font-light hover:text-menu-item hover:bg-transparent";
export default function Navbar() {
  return (
    <nav className="bg-app-black h-36">
      <div className=" mx-[10vw] mb-[10vh] h-full flex items-center justify-between">
        {/* Left: Logo/Image */}
        <Image
          src="/logo.png"
          alt="MyApp Logo"
          width={40}
          height={40}
          className="object-contain"
        />

        {/* Right: Navigation Menu */}
        <div className="m-2">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink className={navItemClasses} href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/">
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/">
                  About Me
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
 