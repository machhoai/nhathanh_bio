import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to My Website</h1>
                    <p className="mt-2 text-lg">Your one-stop destination for amazing content</p>
                </div>
            </header>
            <main className="flex-grow">
                <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                        <p className="text-gray-600">
                            Hi! I'm a passionate developer who loves creating beautiful and
                            functional web applications.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                        <p className="text-gray-600">
                            Check out my latest projects and see what I've been working on
                            recently.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-gray-600">
                            Feel free to reach out to me for collaborations or just to say hi!
                        </p>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2023 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;