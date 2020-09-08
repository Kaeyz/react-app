import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import IndividualHome from './IndividualHome';
import AdminHome from './AdminHome';
import CompanyHome from './CompanyHome';

const Dashboard = ({userType}) => {
	return (
		<DashboardLayout whatPage="Dashboard">

			{userType === 'INDIVIDUAL' || userType === 'EMPLOYEE' ? <IndividualHome /> : null }

			{userType === 'COMPANY' && <CompanyHome />}

			{userType === 'ADMIN' || userType === 'SUPERADMIN' ? <AdminHome /> : null}

		</DashboardLayout>
	);
};

Dashboard.propTypes = {
	userType: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
	const { type } = state.user.user;
	return { userType: type };
};

export default connect(mapStateToProps)(Dashboard);
