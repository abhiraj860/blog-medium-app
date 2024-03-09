import { SignupType } from "@abhiraj860/medium-blog";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
	const [postInputs, setPostInputs] = useState<SignupType>({
		name: "",
		username: "",
		password: "",
	});
	function sendRequest() {

	}
	return (
		<div className="flex justify-center items-center flex-col bg-white h-screen">
			{/* {JSON.stringify(postInputs)} */}
			<div className="w-1/2 text-3xl font-bold px-5 text-center">Create an account</div>
			<div className="w-1/2 text-slate-400 px-5 text-center">
				{type==='signup' ? "Already have an account?" : "Don't have an account?"}{" "}
				<Link to={type === "signup" ? "/signin" : "/signup"}>
					<span className="pl-1 underline">
						{type === 'signup'? "Sign In" : "Sign Up"}
					</span>
				</Link>
			</div>
			<div className="flex flex-col w-1/2 px-3">
				{type==="signup" && <LabelledInput
					label={"Name"}
					placeholder="Abhiraj Aditya"
					onChange={(e) =>
						setPostInputs((c) => ({
							...c,
							name: e.target.value,
						}))
					}
				/>}
				<LabelledInput
					label={"Username"}
					placeholder="abhiraj@gmail.com"
					onChange={(e) =>
						setPostInputs((c) => ({
							...c,
							username: e.target.value,
						}))
					}
				/>
				<LabelledInput
					label={"Password"}
					type = {'password'}
					placeholder ={'123456'}
					onChange={(e) =>
						setPostInputs((c) => ({
							...c,
							password: e.target.value,
						}))
					}
				/>
				<div className="mt-5">
					<button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === 'signup' ? "Sign Up" : "Sign In"}</button>
				</div>
				</div>

		</div>
	);
};

interface LabelledInputType {
	label: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
	return (
		<div>
			<div className="mt-3">
				<div className="mb-1">
					<label className="text-md font-medium text-gray-900">
						{label}
					</label>
				</div>
				<input
					onChange={onChange}
					type={type || 'text'}
					className="bg-gray-50 border-2 border-gray-400 text-black text-sm rounded-lg focus:outline-none focus:border-solid focus:border-blue-500 w-full p-2.5"
					placeholder={placeholder}
					required
				/>
			</div>
		</div>
	);
}
