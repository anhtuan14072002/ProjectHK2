package com.project2.treeshop.service;

import com.project2.treeshop.entity.Category;
import com.project2.treeshop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    // Get all categories
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Get category by ID
    public Optional<Category> getCategoryById(int categoryId) {
        return categoryRepository.findById(categoryId);
    }

    // Create a new category
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Update an existing category
    public Optional<Category> updateCategory(int categoryId, Category updatedCategory) {
        return categoryRepository.findById(categoryId).map(existingCategory -> {
            existingCategory.setName(updatedCategory.getName());
            existingCategory.setDescription(updatedCategory.getDescription());
            return categoryRepository.save(existingCategory);
        });
    }

    // Delete a category
    public boolean deleteCategory(int categoryId) {
        if (categoryRepository.existsById(categoryId)) {
            categoryRepository.deleteById(categoryId);
            return true;
        }
        return false;
    }
}
