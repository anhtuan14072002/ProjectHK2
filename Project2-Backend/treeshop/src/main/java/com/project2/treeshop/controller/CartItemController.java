package com.project2.treeshop.controller;

import com.project2.treeshop.entity.CartItem;
import com.project2.treeshop.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart-items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    // Get all cart items for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CartItem>> getCartItemsByUserId(@PathVariable int userId) {
        return ResponseEntity.ok(cartItemService.getCartItemsByUserId(userId));
    }

    // Get a specific cart item by ID
    @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable int id) {
        Optional<CartItem> cartItem = cartItemService.getCartItemById(id);
        return cartItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add a new cart item
    @PostMapping
    public ResponseEntity<CartItem> addCartItem(@RequestBody CartItem cartItem) {
        CartItem createdCartItem = cartItemService.addCartItem(cartItem);
        return ResponseEntity.ok(createdCartItem);
    }

    // Update the quantity of an existing cart item
    @PutMapping("/{id}/quantity")
    public ResponseEntity<CartItem> updateCartItemQuantity(@PathVariable int id, @RequestParam int quantity) {
        Optional<CartItem> updatedCartItem = cartItemService.updateCartItemQuantity(id, quantity);
        return updatedCartItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a cart item
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable int id) {
        if (cartItemService.deleteCartItem(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
