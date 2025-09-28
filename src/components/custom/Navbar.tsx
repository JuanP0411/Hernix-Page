'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const navItemClasses = "text-menu-item font-light hover:text-menu-item hover:bg-transparent text-[clamp(0.8rem,1.1vw,1.5rem)]";
export default function Navbar() {
  return (
    <nav className="bg-app-black h-[20vh]">
      <div className=" mx-[10vw] mb-[10vh] h-full flex items-center justify-between">
        {/* Left: Logo/Image */}
        <img
  src="/logo.png"
  alt="MyApp Logo"
  className="w-[clamp(2rem,4vw,4rem)] h-auto object-contain"
/>
        {/* Right: Navigation Menu */}
        <div className="m-2">
          <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[clamp(1rem,3vw,4rem)]">
              <NavigationMenuItem>
                <NavigationMenuLink className={navItemClasses} href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/services">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/portfolio">
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/about">
                  About Me
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink className={navItemClasses} href="/contact">
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
 