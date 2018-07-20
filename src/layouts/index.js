import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
