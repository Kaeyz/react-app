import { ADD_REPORTS, ADD_REPORT, CLEAR_REPORT, REPORT_IS_LOADING, REPORT_NOT_LOADING } from '../types';
import reportQueries from '../../client/queries/reportQueries';
import { errorAlert } from './alertActions';

const reportIsLoading = () => {
	return {
		type: REPORT_IS_LOADING
	};
};

const reportNotLoading = () => {
	return {
		type: REPORT_NOT_LOADING
	};
};

const setReports = (reports) => {
	return {
		type: ADD_REPORTS,
		payload: reports
	};
};

export const getReports = () => dispatch => {
	dispatch(reportIsLoading());
	reportQueries.getReports()
		.then(res => {
			if (res.data.me.hra !== null) {
				dispatch(setReports(res.data.me.hra));
				dispatch(reportNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(reportNotLoading());
		});
};

export const getAdminReports = () => dispatch => {
	dispatch(reportIsLoading());
	reportQueries.getAdminReports()
		.then(res => {
			if (res.data.fetchAdminReport.adminReportData !== null) {
				dispatch(setReports(res.data.fetchAdminReport.adminReportData));
				dispatch(reportNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(reportNotLoading());
		});
};

export const getCompanyReports = () => dispatch => {
	dispatch(reportIsLoading());
	reportQueries.getCompanyReports()
		.then(res => {
			if (res.data.fetchCompanyReport.adminReportData  !== null) {
				dispatch(setReports(res.data.fetchCompanyReport.adminReportData));
				dispatch(reportNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(reportNotLoading());
		});
};

const clearReport = () => {
	return {
		type: CLEAR_REPORT,
	};
};

const setReport = (payload) => {
	return {
		type: ADD_REPORT,
		payload
	};
};

export const getReport = (reportId) => (dispatch) => {
	dispatch(clearReport());
	dispatch(reportIsLoading());
	reportQueries.getReport(reportId)
		.then(res => {
			const { target_age, risk_age } = res.data;
			const actual_age = res.data.responses['hra.q.age_in_years.a.years'];
			dispatch(setReport({ actual_age, risk_age, target_age, reportId }));
			dispatch(reportNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(reportNotLoading());
		});
};

export const downloadReportPdf = (reportId) => (dispatch) => {
	reportQueries.getReportPdf(reportId)
		.then((res) => {
			const a = document.createElement('a');
			a.href = window.URL.createObjectURL(res);
			a.download = 'HraReport.pdf';
			document.body.appendChild(a);
			a.click();
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
		});
};