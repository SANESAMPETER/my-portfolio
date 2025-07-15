import { motion } from "framer-motion";

const skillSections = {
    Frontend: [
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "jQuery", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
        { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
        ,
    ],

    Backend: [
        { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" }
    ],
    Database: [
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    Frameworks: [
        { name: "Laravel", img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
        { name: "CodeIgniter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    ],
    Libraries: [
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
};

const Skills = () => (
    <section className="bg-gray-50 py-12 text-center" id="skills">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        {Object.entries(skillSections).map(([category, skills]) => (
            <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold mb-6 text-blue-600">{category}</h3>
                <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
                    {skills.map(({ name, img }) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="w-24 h-24 flex flex-col items-center justify-center space-y-2"
                        >
                            <img src={img} alt={name} className="w-12 h-12 object-contain" />
                            <span className="text-sm text-gray-700 dark:text-white">{name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        ))}
    </section>
);

export default Skills;
