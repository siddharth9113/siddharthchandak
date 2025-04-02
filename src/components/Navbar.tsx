import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "About",
    href: "#about"
  }, {
    name: "Timeline",
    href: "#timeline"
  }, {
    name: "Work",
    href: "#work"
  }, {
    name: "Research",
    href: "#research"
  }, {
    name: "Resume",
    href: "#resume"
  }, {
    name: "Blog",
    href: "#blog"
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-poppins text-xl font-bold text-foreground">
            Siddharth<span className="text-primary"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <a key={item.name} href={item.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                {item.name}
              </a>)}
            <Button className="ml-4" asChild>
              <a href="mailto:siddharth.chandak_ug25@ashoka.edu.in">Contact Me</a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <a key={item.name} href={item.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button className="mt-2 w-full" asChild>
                <a href="mailto:siddharth.chandak_ug25@ashoka.edu.in">Contact Me</a>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;