import { dedupe, flag } from "flags/next";
import { vercelAdapter } from "@flags-sdk/vercel";

type Entities = {
	user?: {
		id: string;
		email: string;
		plan: string;
		isBeta: boolean;
	};
};

const identify = dedupe(async (): Promise<Entities> => {
	return {
		user: {
			id: "123456789",
			email: "example@gmail.com",
			plan: "pro",
			isBeta: true,
		},
	};
});

export const enableOnboarding = flag({
	key: "enable-onboarding",
	adapter: vercelAdapter(),
});

export const homepageVariant = flag({
	key: "homepage-variant",
	adapter: vercelAdapter(),
});

export const someNewFeature = flag({
	key: "some-new-feature",
	defaultValue: false,
	adapter: vercelAdapter(),
	identify,
});

// to test draft flag 

export const darkMOdeToggle = flag({
	key: "dark-mode-toggle",
	defaultValue: false,
	adapter: vercelAdapter(),
});