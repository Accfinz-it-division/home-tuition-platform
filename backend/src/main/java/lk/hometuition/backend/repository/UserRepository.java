package lk.hometuition.backend.repository;

import lk.hometuition.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
    
    // 🚀 THESE ARE NEEDED FOR ADMIN
    List<User> findByRole(String role);
    List<User> findByRoleAndVerificationStatus(String role, String status);
}