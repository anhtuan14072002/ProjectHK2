package com.project2.treeshop.service;

import com.project2.treeshop.entity.Order;
import com.project2.treeshop.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // Fetch all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Fetch a single order by ID
    public Optional<Order> getOrderById(int orderId) {
        return orderRepository.findById(orderId);
    }

    // Create a new order
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    // Update an existing order
    public Optional<Order> updateOrder(int orderId, Order updatedOrder) {
        return orderRepository.findById(orderId).map(existingOrder -> {
            existingOrder.setStatus(updatedOrder.getStatus());
            existingOrder.setTotalAmount(updatedOrder.getTotalAmount());
            existingOrder.setPaymentMethod(updatedOrder.getPaymentMethod());
            existingOrder.setAddress(updatedOrder.getAddress());
            return orderRepository.save(existingOrder);
        });
    }

    // Delete an order
    public boolean deleteOrder(int orderId) {
        if (orderRepository.existsById(orderId)) {
            orderRepository.deleteById(orderId);
            return true;
        }
        return false;
    }
}
