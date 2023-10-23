import React from "react";

export default function Home(): JSX.Element {
    return (
        <main>
            <div className="mt-8">
                <h1 className="text-4xl transform -skew-y-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-6 shadow-2xl rounded-lg p-6">
                    "Coding is like a love story. The more you immerse yourself, the deeper you fall in love with it." -
                    Issa Mdoe
                </h1>
            </div>
            <div>
                <h1 className="text-4xl transform -skew-y-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 -translate-y-3 shadow-2xl rounded-lg p-6">
                    "In the world of code, every line is a love letter, and every bug is a heartache." - Sarah Johnson
                </h1>
            </div>
            <div className="my-8">
                <h1 className="text-4xl transform -skew-y-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 -translate-y-9 shadow-2xl rounded-lg p-6">
                    "Coding is the art of falling in love with logical problem-solving." - Issa Mdoe
                </h1>
            </div>
        </main>
    );
}
