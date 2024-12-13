package com.project2.treeshop.service;

import com.project2.treeshop.entity.Product;
import com.project2.treeshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    public Optional<Product> getProductById(int productId) {
        return productRepository.findById(productId);
    }

    // Create a new product
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // Update an existing product
    public Optional<Product> updateProduct(int productId, Product updatedProduct) {
        return productRepository.findById(productId).map(existingProduct -> {
            existingProduct.setCategory(updatedProduct.getCategory());
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setStock(updatedProduct.getStock());
            existingProduct.setImageUrl(updatedProduct.getImageUrl());
            return productRepository.save(existingProduct);
        });
    }

    // Delete a product
    public boolean deleteProduct(int productId) {
        if (productRepository.existsById(productId)) {
            productRepository.deleteById(productId);
            return true;
        }
        return false;
    }
}
