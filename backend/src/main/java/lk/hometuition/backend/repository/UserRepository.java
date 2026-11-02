package lk.hometuition.backend.repository;

import lk.hometuition.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // ஈமெயில் ஏற்கனவே இருக்கான்னு செக் பண்ண
    boolean existsByEmail(String email);
}