package com.project2.treeshop.service;

import com.project2.treeshop.entity.BlogPost;
import com.project2.treeshop.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostRepository blogPostRepository;

    // Get all blog posts
    public List<BlogPost> getAllBlogPosts() {
        return blogPostRepository.findAll();
    }

    // Get blog posts by author ID
    public List<BlogPost> getBlogPostsByAuthorId(int authorId) {
        return blogPostRepository.findByAuthorUserId(authorId);
    }

    // Search blog posts by title
    public List<BlogPost> searchBlogPostsByTitle(String keyword) {
        return blogPostRepository.findByTitleContaining(keyword);
    }

    // Get a blog post by ID
    public Optional<BlogPost> getBlogPostById(int postId) {
        return blogPostRepository.findById(postId);
    }

    // Create a new blog post
    public BlogPost createBlogPost(BlogPost blogPost) {
        return blogPostRepository.save(blogPost);
    }

    // Update an existing blog post
    public Optional<BlogPost> updateBlogPost(int postId, BlogPost blogPostDetails) {
        return blogPostRepository.findById(postId).map(blogPost -> {
            blogPost.setTitle(blogPostDetails.getTitle());
            blogPost.setContent(blogPostDetails.getContent());
            blogPost.setAuthor(blogPostDetails.getAuthor());
            return blogPostRepository.save(blogPost);
        });
    }

    // Delete a blog post
    public boolean deleteBlogPost(int postId) {
        if (blogPostRepository.existsById(postId)) {
            blogPostRepository.deleteById(postId);
            return true;
        }
        return false;
    }
}
