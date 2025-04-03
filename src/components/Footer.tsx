import { Linkedin, Twitter, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-poppins text-xl font-bold text-foreground">
              Siddharth<span className="text-primary"></span>
            </h3>
            <p className="mt-2 text-muted-foreground">
          </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/siddharthchandak" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/siddharth_9113" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:siddharth.chandak_ug25@ashoka.edu.in" className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Siddharth Chandak. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;