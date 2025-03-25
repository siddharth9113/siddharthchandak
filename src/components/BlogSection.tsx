
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building 30byThirty: A Startup Journey of Chaos, Hustle, and Small Wins",
      excerpt: "It all started with a simple problem—college societies and fests needed custom merch, but the process was always a headache...",
      image: "/lovable-uploads/78662df7-bae9-4a5c-94d7-03094e516560.png",
      date: "June 10, 2024",
      readTime: "4 min read",
      slug: "building-30bythirty-startup-journey",
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Blog & Insights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Thoughts, experiences, and insights from my journey in tech and entrepreneurship.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto font-medium" asChild>
                  <a href={`/blog/${post.slug}`} className="group flex items-center">
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-white/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
          <h3 className="text-2xl font-medium mb-4">Building 30byThirty: A Startup Journey of Chaos, Hustle, and Small Wins</h3>
          
          <div className="prose prose-lg max-w-none">
            <p>It all started with a simple problem—college societies and fests needed custom merch, but the process was always a headache. Prices were unpredictable, quality was hit-or-miss, and dealing with vendors felt like running an obstacle course. I had no background in manufacturing or logistics, but I knew there had to be a better way. So, I dove in.</p>
            
            <p>At first, it was just me, my laptop, and a bunch of WhatsApp messages to vendors and clients. I remember our first big order—a batch of t-shirts for a college fest. I was excited, nervous, and had no idea how to manage production at scale. The order was delayed by two days, my supplier stopped answering calls, and I genuinely thought this might be the end before it even began. But somehow, after a few sleepless nights and some frantic phone calls, we pulled it off. Seeing students wear our merch at the event? That made it all worth it.</p>
            
            <p>Since then, 30byThirty has grown beyond just t-shirts. We now do notebooks, cups, tote bags, and more. We've worked with multiple colleges, streamlined our processes, and even started exploring AI-powered tools to make ordering seamless. But the journey is far from smooth. Cash flow is a constant challenge—fests pay us after the event, but suppliers need upfront payments. Every month, there's a new learning curve.</p>
            
            <p>Still, the excitement never fades. There's something incredible about seeing an idea turn into something real—something people wear, use, and associate with their college experiences. The late nights, the problem-solving, the small wins—they make the struggle worth it. And this is just the beginning.</p>
            
            <p>If you've ever built something from scratch, you know the feeling. It's messy, unpredictable, and incredibly rewarding. Here's to the chaos of building something meaningful. 🚀</p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground mt-6">
            <Calendar className="h-4 w-4 mr-1" />
            <span>June 10, 2024</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>4 min read</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
