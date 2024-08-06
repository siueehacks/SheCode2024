"use client";
import "../styles/signup.css"
export function SignupComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-300 via-purple-200 to-indigo-200">
            <div className="w-full max-w-lg p-8 space-y-8 bg-white border border-gray-200 rounded-xl shadow-xl" id="main-panel">
                <div className="text-center">
                    <img
                        src="/logo.png"
                        alt="SheCode Logo"
                        className="mx-auto h-24 w-auto"
                    />
                    <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Register for event</h2>
                </div>
                <form className="mt-8 space-y-6" id="signup-form">
                    <LabelledInput label="First Name" placeholder="Alexis" />
                    <LabelledInput label="Last Name" placeholder="James" />
                    <LabelledInput label="Email" placeholder="Email" />
                    <LabelledInput label="Allergies" placeholder="Peanuts" />
                    <LabelledInput label="Dietary Restrictions" placeholder="Vegan" />
                    <LabelledInput label="Guardian Full Name" placeholder="Karen Brown" />
                    <LabelledInput label="Guardian Phone Number" placeholder="***-***-****" />
                    <LabelledInput label="Highschool" placeholder="Edwardsville High" />
                    <LabelledInput label="Grade Level" placeholder="10" />

                    {/* <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="signin" className="font-medium text-gray-600 hover:text-indigo-500">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </div> */}
                    <div>
                        <button
                            type="submit"
                            onClick={handler}
                            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[rgb(153,25,94)] transition duration-300 ease-in-out hover:bg-[rgb(119,19,73)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(153,25,94)]"
                        >
                            Register
                        </button>
                    </div>
                </form>
                {/* <div className="text-center">
                    <a href="#" className="font-medium text-gray-600 hover:text-indigo-500">
                        Forgot your password?
                    </a>
                </div> */}
            </div>
            <div className="success-message" id="success-message">
                <div className="success-message-backdrop"></div>
                <h2 className="success-message-header">Application Submitted!</h2>
                <p className="success-message-body">You should have recieved an email confirming your registration.</p>
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
                name={label.toLowerCase()}
            />
        </div>
    );
}

async function handler(data: any) {
    data.preventDefault();
    const formData = new FormData(data.target.form);
    const mainPanel = document.getElementById('main-panel');
    const successMessage = document.getElementById('success-message');

    const registerReq = await fetch("http://51.222.121.147:8186/api/apply",
        // const registerReq = await fetch("http://localhost:5500/api/apply", //testing purposes
        {
            method: "POST",
            mode: 'cors',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                email: formData.get('email'),
                firstName: formData.get('first name'),
                lastName: formData.get('last name')
            })
        }
    );
    const reqData = await registerReq.json();
    if (!reqData.success) {
        alert(reqData.reason);
        return;
    } else {
        if (mainPanel) {
            mainPanel.style.display = "none";
        }
        if (successMessage) {
            successMessage.style.display = "flex";
        }
        setTimeout(() => {
            window.location.pathname = "/";
        }, 60000);
    }

}
