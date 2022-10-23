import React from 'react';
import {
	AboutSection,
	ArticlesSection,
	ContactSection,
	HeroSection,
	InterestsSection,
	Page,
	ProjectsSection,
	Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
	return (
		<>
			<Seo title="Ivan Miranda Ortega | Software Developer" />
			<Page useSplashScreenAnimation>
				<HeroSection sectionId="hero" />
				<AboutSection sectionId="about" heading="About Ivan" />
				<InterestsSection sectionId="details" heading="Skills" />
				<ProjectsSection sectionId="projects" heading="Projects" />
				<ContactSection sectionId="contact" heading="Say Hello" />
			</Page>
		</>
	);
}
