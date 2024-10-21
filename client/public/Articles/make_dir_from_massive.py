import os
pul = __file__.split('\\')
topics = {
    "Frontend_Development": [
        "JavaScript", "React", "Vue.js", "Angular", "HTML", "CSS", "Sass", "TypeScript"
    ],
    "Backend_Development": [
        "Python", "Java", "Ruby", "Fortran", "Node.js", "PHP", "Go", "C#", "Rust"
    ],
    "Game_Development": [
        "C#", "C++", "Lua", "Unity", "Unreal Engine", "Godot", "GameMaker"
    ],
    "AI": [
        "Python", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenAI Gym"
    ],
    "Mobile_Development": [
        "Swift", "Kotlin", "React Native", "Flutter"
    ],
    "DevOps": [
        "Docker", "Kubernetes", "Ansible", "Terraform"
    ],
    "Database_Management": [
        "MySQL", "PostgreSQL", "MongoDB", "SQLite"
    ],
    "Cloud_Computing": [
        "AWS", "Azure", "Google Cloud Platform"
    ]
}
put = pul[0] + '/' + pul[1] + '/' + pul[2] + '/' + pul[3] + '/codeCollector/client/public/Articles/'
for topic, subtopics in topics.items():
    topic_dir = os.path.join(put, topic)
    os.makedirs(topic_dir, exist_ok=True)

    for subtopic in subtopics:
        subtopic_dir = os.path.join(topic_dir, subtopic)
        os.makedirs(subtopic_dir, exist_ok=True)