
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building 30byThirty: A Startup Journey of Chaos, Hustle, and Small Wins",
      excerpt: "It all started with a simple problem—college societies and fests needed custom merch, but the process was always a headache...",
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
      </div>
    </section>
  );
};

export default BlogSection;
