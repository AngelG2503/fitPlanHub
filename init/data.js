const samplePlans = [
    {
        title: "30-Day Weight Loss Kickstart",
        description: "Transform your body with this intensive 30-day weight loss program combining HIIT cardio, strength training, and nutrition guidance. Perfect for beginners ready to make a change.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=60",
        price: 1299,
        category: "weight-loss",
        difficulty: "Beginner",
        duration: 4
    },
    {
        title: "Muscle Building Mastery",
        description: "Advanced 12-week hypertrophy program designed to maximize muscle growth through progressive overload and strategic nutrition.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=60",
        price: 2499,
        category: "muscle-gain",
        difficulty: "Advanced",
        duration: 12
    },
    {
        title: "Home Cardio Blast",
        description: "High-intensity cardio workouts requiring zero equipment. Burn calories, improve endurance, and get fit from the comfort of your home.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=60",
        price: 899,
        category: "cardio",
        difficulty: "Intermediate",
        duration: 6
    },
    {
        title: "Yoga Flow & Flexibility",
        description: "Gentle yet effective yoga sequences to improve flexibility, reduce stress, and enhance mind-body connection over 10 transformative weeks.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=60",
        price: 1499,
        category: "yoga",
        difficulty: "Beginner",
        duration: 10
    },
    {
        title: "Strength Training Foundation",
        description: "Master the fundamentals of strength training with proper form, technique, and programming. Build a solid base for long-term progress.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=60",
        price: 1699,
        category: "strength",
        difficulty: "Beginner",
        duration: 8
    },
    {
        title: "Elite Gym Transformation",
        description: "16-week elite program combining powerlifting, bodybuilding, and conditioning for serious athletes seeking maximum results.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=60",
        price: 2999,
        category: "gym",
        difficulty: "Advanced",
        duration: 16
    },
    {
        title: "Mobility & Recovery Program",
        description: "Improve range of motion, reduce injury risk, and enhance athletic performance through targeted mobility and recovery work.",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=60",
        price: 999,
        category: "flexibility",
        difficulty: "Intermediate",
        duration: 6
    },
    {
        title: "Complete Home Workout Revolution",
        description: "Build strength, burn fat, and gain muscle using minimal equipment. Perfect for busy professionals who workout at home.",
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=60",
        price: 1399,
        category: "home-workout",
        difficulty: "Intermediate",
        duration: 10
    },
    {
        title: "Beginner's Fitness Journey",
        description: "Start your fitness journey the right way with this comprehensive beginner program covering all exercise fundamentals.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=60",
        price: 799,
        category: "beginner",
        difficulty: "Beginner",
        duration: 8
    },
    {
        title: "Advanced Athletic Performance",
        description: "Push your limits with this advanced training protocol designed for competitive athletes and fitness enthusiasts.",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=60",
        price: 2199,
        category: "advanced",
        difficulty: "Advanced",
        duration: 12
    },
    {
        title: "Fat Loss & Muscle Definition",
        description: "Achieve a lean, defined physique with this cutting-edge program combining metabolic conditioning and resistance training.",
        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=60",
        price: 1599,
        category: "weight-loss",
        difficulty: "Intermediate",
        duration: 10
    },
    {
        title: "Power & Strength Development",
        description: "Develop explosive power and maximal strength through Olympic lifting variations and powerlifting movements.",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=60",
        price: 1999,
        category: "strength",
        difficulty: "Advanced",
        duration: 12
    },
    {
        title: "Mindful Movement & Meditation",
        description: "Combine gentle yoga, meditation, and breathwork for complete mental and physical wellness in this holistic program.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=60",
        price: 1299,
        category: "yoga",
        difficulty: "Beginner",
        duration: 8
    },
    {
        title: "HIIT Cardio Conditioning",
        description: "Maximize calorie burn and cardiovascular fitness with scientifically designed high-intensity interval training protocols.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=60",
        price: 1099,
        category: "cardio",
        difficulty: "Advanced",
        duration: 8
    },
    {
        title: "Functional Fitness Fundamentals",
        description: "Train for real-life movements and activities with this functional training program perfect for all fitness levels.",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=60",
        price: 1199,
        category: "gym",
        difficulty: "Intermediate",
        duration: 8
    },
    {
        title: "Bodyweight Mastery",
        description: "Master your bodyweight with calisthenics progressions from basic to advanced movements requiring zero equipment.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=60",
        price: 999,
        category: "home-workout",
        difficulty: "Intermediate",
        duration: 12
    },
    {
        title: "Athletic Mobility Training",
        description: "Enhance sports performance and prevent injuries with this comprehensive mobility and flexibility program for athletes.",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=60",
        price: 899,
        category: "flexibility",
        difficulty: "Intermediate",
        duration: 6
    },
    {
        title: "Total Body Transformation",
        description: "Complete 16-week transformation program combining strength, cardio, nutrition, and lifestyle coaching for maximum results.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=60",
        price: 3499,
        category: "muscle-gain",
        difficulty: "Advanced",
        duration: 16
    },
    {
        title: "Core Strength & Stability",
        description: "Build a rock-solid core with targeted exercises improving stability, posture, and overall athletic performance.",
        image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=60",
        price: 799,
        category: "strength",
        difficulty: "Beginner",
        duration: 6
    },
    {
        title: "Vinyasa Flow Mastery",
        description: "Advanced vinyasa yoga program flowing through challenging sequences to build strength, flexibility, and mindfulness.",
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=60",
        price: 1699,
        category: "yoga",
        difficulty: "Advanced",
        duration: 10
    }
];

module.exports = { data: samplePlans };
