import React from "react";
import { homepageVariant, someNewFeature } from "@/flags";
import NewHomePage from "./component/new-homepage";
import CurrentHomePage from "./component/current-homepage";
import SomeNewFeature from "./component/some-new-feature";

const HomePage = async () => {
	const variant = await homepageVariant();
	const betaFeature = await someNewFeature();
	return (
		<main>
			{variant === "variant" ? <NewHomePage /> : <CurrentHomePage />}
			{betaFeature === true && <SomeNewFeature />}
		</main>
	);
};

export default HomePage;
