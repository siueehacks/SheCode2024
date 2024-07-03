"use client";
export function SigninComponent() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="text-center">
                    <img
                        src="/logo.png" 
                        alt="SheCode Logo"
                        className="mx-auto h-20 w-auto"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <LabelledInput label="Email" placeholder="Email" />
                    <LabelledInput label="Password" type="password" placeholder="Password" />
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-gray-600 hover:text-zinc-400">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={handler}
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#99195e] hover:bg-[grey] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <a href="#" className="font-medium text-gray-600 hover:text-zinc-400">
                        Don't have an account? Sign up
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

function handler() {
    console.log("Kunal");
}
