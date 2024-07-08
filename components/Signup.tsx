"use client";

export function SignupComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-300 via-purple-200 to-indigo-200">
            <div className="w-full max-w-lg p-8 space-y-8 bg-white border border-gray-200 rounded-xl shadow-xl">
                <div className="text-center">
                    <img
                        src="/logo.png" 
                        alt="SheCode Logo"
                        className="mx-auto h-24 w-auto"
                    />
                    <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Create an account</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <LabelledInput label="Name" placeholder="Full Name" />
                    <LabelledInput label="Email" placeholder="Email" />
                    <LabelledInput label="Password" type="password" placeholder="Password" />
                    <LabelledInput label="Confirm Password" type="password" placeholder="Confirm Password" />
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-gray-600 hover:text-indigo-500">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </div>
                    <div>
                    <button
                            type="submit"
                            onClick={handler}
                            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[rgb(153,25,94)] transition duration-300 ease-in-out hover:bg-[rgb(119,19,73)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(153,25,94)]"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <a href="#" className="font-medium text-gray-600 hover:text-indigo-500">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700">{label}</label>
            <input
                type={type || "text"}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#99195e] focus:border-[#99195e] sm:text-sm"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

function handler() {
    console.log("Kunal");
}
