import { projects } from "./data/projects";

export default function Projects() {
    return (
        <section className="container mx-auto py-20 px-4" id="projects">
            <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p) => (
                    <div key={p.title} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold">{p.title}</h3>
                            <p className="mt-2 text-gray-600">{p.description}</p>
                            <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
