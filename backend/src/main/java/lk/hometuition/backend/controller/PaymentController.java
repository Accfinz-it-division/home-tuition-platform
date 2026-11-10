package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Payment;
import lk.hometuition.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    // 🚀 Add Demo Payments on Startup
    @PostConstruct
    public void initPayments() {
        if (paymentRepository.count() == 0) {
            Payment p1 = new Payment();
            p1.setCourse("Mathematics - PAY-8841");
            p1.setAmount("LKR 3,500");
            p1.setDate("22 Oct 2026");
            p1.setStatus("PAID");
            paymentRepository.save(p1);

            Payment p2 = new Payment();
            p2.setCourse("Science - PAY-8812");
            p2.setAmount("LKR 3,000");
            p2.setDate("01 Oct 2026");
            p2.setStatus("PAID");
            paymentRepository.save(p2);

            Payment p3 = new Payment();
            p3.setCourse("English - PAY-8813");
            p3.setAmount("LKR 2,500");
            p3.setDate("01 Oct 2026");
            p3.setStatus("PAID");
            paymentRepository.save(p3);
        }
    }

    // 🚀 Get all payments
    @GetMapping
    public ResponseEntity<?> getAllPayments() {
        return ResponseEntity.ok(paymentRepository.findAll());
    }

    // 🚀 Add new payment
    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody Payment payment) {
        paymentRepository.save(payment);
        return ResponseEntity.ok("Payment recorded successfully!");
    }
}