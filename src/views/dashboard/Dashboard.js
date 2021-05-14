import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import AdminHome from './AdminHome';
import CompanyHome from './CompanyHome';
import IndividualHome from './IndividualHome';

const Dashboard = ({userType}) => {
	if (userType === undefined || userType === null) return null;
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
