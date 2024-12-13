package com.project2.treeshop.service;

import com.project2.treeshop.entity.CartItem;
import com.project2.treeshop.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    // Get all cart items for a specific user
    public List<CartItem> getCartItemsByUserId(int userId) {
        return cartItemRepository.findByUserUserId(userId);
    }

    // Get cart item by ID
    public Optional<CartItem> getCartItemById(int cartItemId) {
        return cartItemRepository.findById(cartItemId);
    }

    // Add a new cart item
    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    // Update the quantity of a cart item
    public Optional<CartItem> updateCartItemQuantity(int cartItemId, int quantity) {
        return cartItemRepository.findById(cartItemId).map(cartItem -> {
            cartItem.setQuantity(quantity);
            return cartItemRepository.save(cartItem);
        });
    }

    // Delete a cart item
    public boolean deleteCartItem(int cartItemId) {
        if (cartItemRepository.existsById(cartItemId)) {
            cartItemRepository.deleteById(cartItemId);
            return true;
        }
        return false;
    }
}
