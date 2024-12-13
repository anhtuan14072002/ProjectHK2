package com.project2.treeshop.controller;

import com.project2.treeshop.entity.BlogPost;
import com.project2.treeshop.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blog-posts")
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    // Get all blog posts
    @GetMapping
    public ResponseEntity<List<BlogPost>> getAllBlogPosts() {
        return ResponseEntity.ok(blogPostService.getAllBlogPosts());
    }

    // Get blog posts by author ID
    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<BlogPost>> getBlogPostsByAuthorId(@PathVariable int authorId) {
        return ResponseEntity.ok(blogPostService.getBlogPostsByAuthorId(authorId));
    }

    // Search blog posts by title
    @GetMapping("/search")
    public ResponseEntity<List<BlogPost>> searchBlogPostsByTitle(@RequestParam String keyword) {
        return ResponseEntity.ok(blogPostService.searchBlogPostsByTitle(keyword));
    }

    // Get a specific blog post by ID
    @GetMapping("/{postId}")
    public ResponseEntity<BlogPost> getBlogPostById(@PathVariable int postId) {
        Optional<BlogPost> blogPost = blogPostService.getBlogPostById(postId);
        return blogPost.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new blog post
    @PostMapping
    public ResponseEntity<BlogPost> createBlogPost(@RequestBody BlogPost blogPost) {
        return ResponseEntity.ok(blogPostService.createBlogPost(blogPost));
    }

    // Update a blog post
    @PutMapping("/{postId}")
    public ResponseEntity<BlogPost> updateBlogPost(@PathVariable int postId, @RequestBody BlogPost blogPostDetails) {
        Optional<BlogPost> updatedBlogPost = blogPostService.updateBlogPost(postId, blogPostDetails);
        return updatedBlogPost.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a blog post
    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> deleteBlogPost(@PathVariable int postId) {
        if (blogPostService.deleteBlogPost(postId)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
