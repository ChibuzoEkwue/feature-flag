import React from "react";
import { enableOnboarding } from "@/flags";

const SignUpPage = async () => {
	const isEnableOnboarding = await enableOnboarding();

	return (
		<main>
			{isEnableOnboarding
				? "You can sign up"
				: "Sorry, we are not accepting new users at this time"}
		</main>
	);
};

export default SignUpPage;
