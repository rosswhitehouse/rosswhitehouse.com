import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import '../style/app.scss'

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Ross Whitehouse"
			meta={[
				{ name: 'description', content: 'Ross Whitehouse, Web Developer' },
				{ name: 'keywords', content: 'websites, developer, front-end' },
			]}
		/>
		<Header />
		<div>
			{children()}
		</div>
		<Footer />
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
