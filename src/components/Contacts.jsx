export default function Contact() {
    return (
        <section className="container mx-auto py-20 px-4" id="contact">
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <p className="text-center text-gray-700 mb-10">Feel free to reach out for collaborations or just a friendly hello!</p>
            <form className="max-w-xl mx-auto space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
                <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg"></textarea>
                <button type="submit" className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Send Message
                </button>
            </form>
        </section>
    );
}
