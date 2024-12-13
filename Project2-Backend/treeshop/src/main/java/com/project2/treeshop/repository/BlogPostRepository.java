package com.project2.treeshop.repository;

import com.project2.treeshop.entity.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Integer> {
    List<BlogPost> findByAuthorUserId(int authorId);
    List<BlogPost> findByTitleContaining(String keyword);
}
