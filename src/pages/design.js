import React from 'react';
import { AboutSection, Page, Seo } from 'gatsby-theme-portfolio-minimal';

export default function Design() {
	return (
		<>
			<Seo title="Design" />
			<Page useSplashScreenAnimation>
				<AboutSection sectionId="design" heading="Designs" />
			</Page>
		</>
	);
}
