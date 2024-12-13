package com.project2.treeshop.service;

import com.project2.treeshop.entity.OrderItem;
import com.project2.treeshop.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    // Fetch all order items
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    // Fetch order item by ID
    public Optional<OrderItem> getOrderItemById(int orderItemId) {
        return orderItemRepository.findById(orderItemId);
    }

    // Create a new order item
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    // Update an existing order item
    public Optional<OrderItem> updateOrderItem(int orderItemId, OrderItem updatedOrderItem) {
        return orderItemRepository.findById(orderItemId).map(existingOrderItem -> {
            existingOrderItem.setOrder(updatedOrderItem.getOrder());
            existingOrderItem.setProduct(updatedOrderItem.getProduct());
            existingOrderItem.setQuantity(updatedOrderItem.getQuantity());
            existingOrderItem.setUnitPrice(updatedOrderItem.getUnitPrice());
            return orderItemRepository.save(existingOrderItem);
        });
    }

    // Delete an order item
    public boolean deleteOrderItem(int orderItemId) {
        if (orderItemRepository.existsById(orderItemId)) {
            orderItemRepository.deleteById(orderItemId);
            return true;
        }
        return false;
    }
}
