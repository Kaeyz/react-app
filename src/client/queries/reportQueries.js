import keys from '../../utils/keys';
import { client, httpFetch } from '../client';
const reportQueries = {};


reportQueries.getReports = () => {
	const query = `
    query ME {
      me {
        hra {
          _id
          reportId
          ghmReference
          updatedAt
        }
      }
    }
    `;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

reportQueries.getAdminReports = () => {
	const query = `
	query FETCH_ADMIN_REPORT {
		fetchAdminReport {
			adminReportData {
				user_id
				name
				email
				report_ts
				user_age_in_years
				report_id
			}
			length
		}
	}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

reportQueries.getCompanyReports = () => {
	const query = `
	query FETCH_COMPANY_REPORT {
		fetchCompanyReport {
			adminReportData {
				user_id
				name
				email
				report_ts
				user_age_in_years
				report_id
			}
			length
		}
	}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};


reportQueries.getReport = async (reportId) => {

	return new Promise((resolve, reject) => {

		if (!reportId) {
			return reject('No Report found');
		}

		const path = `${keys.ghmServer}/get_report_data`;
		const body = `{"get_report_data.client_id":"chooselife","get_report_data.report_id":"${reportId}"}`;

		const formdata = new FormData();
		formdata.append('json', body);

		httpFetch
			.post(path, formdata)
			.then(res => res.text())
			.then(res => resolve(JSON.parse(res)))
			.catch(err => reject(err));
	});
};


reportQueries.getReportPdf = async (reportId) => {

	const path = `${keys.ghmServer}/get_report_pdf`;


	return new Promise((resolve, reject) => {

		if (!reportId) {
			return reject('No Report found');
		}

		const formdata = new FormData();
		formdata.append('json', `{"get_report_pdf.client_id":"chooselife","get_report_pdf.report_id":"${reportId}"}`);
		formdata.append('signer', 'e650303e-e1e1-11e6-b68a-42010af00005@api.ghmcorp.com');
		formdata.append('signature', '9f1c026cb6795e7a0a53ab33c7304053cae51eea5653d6faed59e9a5c0547aa8');

		httpFetch
			.post(path, formdata)
			.then(resp => resp.blob())
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
};

reportQueries.getAdminReportPdf = async () => {

	const path = `${keys.ghmServer}/get_group_report_pdf`;
	// const path = 'https://hra-api.ghmcorp.com/api/v2/get_group_report_pdf';


	return new Promise((resolve, reject) => {
		const formdata = new FormData();
		formdata.append('json', '{"get_group_report_pdf.client_id":"chooselife"}');

		httpFetch
			.post(path, formdata)
			.then(resp => resp.blob())
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
};

reportQueries.getCompanyReportPdf = async (userId) => {

	const path = `${keys.ghmServer}/get_group_report_pdf`;

	// const path = 'https://hra-api.ghmcorp.com/api/v2/get_group_report_pdf';


	return new Promise((resolve, reject) => {
		const formdata = new FormData();
		formdata.append('json', `{"get_group_report_pdf.client_id":"chooselife", "get_group_report_pdf.org_id": "${userId}"}`);

		httpFetch
			.post(path, formdata)
			.then(resp => resp.blob())
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
};

export default Object.freeze(reportQueries);
