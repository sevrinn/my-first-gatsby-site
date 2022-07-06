import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
	return (
		<main>
			<Layout pageTitle='Home Page'>
				<p>I'm making this by follwing the Gatsby Tutorial, baby😎</p>
				<StaticImage alt='a white dog' src='../images/vibe-form.JPG' />
			</Layout>
		</main>
	);
};

export default IndexPage;
