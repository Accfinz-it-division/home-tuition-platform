package lk.hometuition.backend.repository;

import lk.hometuition.backend.entity.ClassSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassScheduleRepository extends JpaRepository<ClassSchedule, Long> {
}