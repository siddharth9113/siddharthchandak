
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // For now, we'll just hardcode the blog post content
  // In a real app, you would fetch this from a database or CMS
  const blogPost = {
    title: "Building 30byThirty: A Startup Journey of Chaos, Hustle, and Small Wins",
    date: "June 10, 2024",
    readTime: "4 min read",
    content: `
      <p>It all started with a simple problem—college societies and fests needed custom merch, but the process was always a headache. Prices were unpredictable, quality was hit-or-miss, and dealing with vendors felt like running an obstacle course. I had no background in manufacturing or logistics, but I knew there had to be a better way. So, I dove in.</p>
      
      <p>At first, it was just me, my laptop, and a bunch of WhatsApp messages to vendors and clients. I remember our first big order—a batch of t-shirts for a college fest. I was excited, nervous, and had no idea how to manage production at scale. The order was delayed by two days, my supplier stopped answering calls, and I genuinely thought this might be the end before it even began. But somehow, after a few sleepless nights and some frantic phone calls, we pulled it off. Seeing students wear our merch at the event? That made it all worth it.</p>
      
      <p>Since then, 30byThirty has grown beyond just t-shirts. We now do notebooks, cups, tote bags, and more. We've worked with multiple colleges, streamlined our processes, and even started exploring AI-powered tools to make ordering seamless. But the journey is far from smooth. Cash flow is a constant challenge—fests pay us after the event, but suppliers need upfront payments. Every month, there's a new learning curve.</p>
      
      <p>Still, the excitement never fades. There's something incredible about seeing an idea turn into something real—something people wear, use, and associate with their college experiences. The late nights, the problem-solving, the small wins—they make the struggle worth it. And this is just the beginning.</p>
      
      <p>If you've ever built something from scratch, you know the feeling. It's messy, unpredictable, and incredibly rewarding. Here's to the chaos of building something meaningful. 🚀</p>
    `,
    slug: "building-30bythirty-startup-journey",
    image: "/lovable-uploads/78662df7-bae9-4a5c-94d7-03094e516560.png",
  };

  if (slug !== blogPost.slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <Link to="/#blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
          
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{blogPost.readTime}</span>
          </div>
          
          <div 
            className="prose prose-lg max-w-none" 
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
