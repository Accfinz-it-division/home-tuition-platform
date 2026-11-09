    @PostConstruct
    public void initCourses() {
        // 🚀 Delete old school courses if they exist
        courseRepository.deleteAll(); 

        // 1. Spoken English Course
        Course c1 = new Course();
        c1.setTitle("Speak with Confidence.");
        c1.setSubject("Spoken English");
        c1.setTeacherName("Ms. Sarah");
        c1.setPrice("LKR 2,500");
        c1.setBadge("Language • All levels");
        c1.setProgress("0%");
        courseRepository.save(c1);

        // 2. Web Development Course
        Course c2 = new Course();
        c2.setTitle("Build the Web.");
        c2.setSubject("Full Stack Web Dev");
        c2.setTeacherName("Mr. Suresh");
        c2.setPrice("LKR 5,000");
        c2.setBadge("IT • Beginner to Pro");
        c2.setProgress("0%");
        courseRepository.save(c2);

        // 3. Graphic Design Course
        Course c3 = new Course();
        c3.setTitle("Design your future.");
        c3.setSubject("Graphic Design");
        c3.setTeacherName("Ms. Anushka");
        c3.setPrice("LKR 3,000");
        c3.setBadge("Skill • Creative Arts");
        c3.setProgress("0%");
        courseRepository.save(c3);
    }