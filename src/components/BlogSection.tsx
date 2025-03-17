
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies shaping the future of web development.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      date: "May 15, 2023",
      readTime: "5 min read",
      slug: "future-of-web-development",
    },
    {
      title: "Mastering CSS Grid Layout",
      excerpt: "A comprehensive guide to creating complex layouts with CSS Grid.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "April 22, 2023",
      readTime: "8 min read",
      slug: "mastering-css-grid",
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Tips and techniques to improve the performance of your React applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "March 10, 2023",
      readTime: "6 min read",
      slug: "optimizing-react-performance",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Blog & Insights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Thoughts, experiences, and insights from my journey in tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <a href="/blog">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
