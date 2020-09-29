import { httpFetch, client } from '../client';

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

	const date = new Date();

	const date_to_string = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

	const formdata = new FormData();
	formdata.append('json', `{"get_reports.client_id":"fitnessfair","get_reports.start_time":"2020-07-01","get_reports.end_time":"${date_to_string}"}`);
	formdata.append('signer', 'e650303e-e1e1-11e6-b68a-42010af00005@api.ghmcorp.com');
	formdata.append('signature', '9f1c026cb6795e7a0a53ab33c7304053cae51eea5653d6faed59e9a5c0547aa8');

	const path = 'https://hra-api.ghmcorp.com/api/v2/get_reports';

	return new Promise((resolve, reject) => {
		httpFetch
			.post(path, formdata)
			.then(res => res.text())
			.then(res => resolve(JSON.parse(res)))
			.catch(err => reject(err));
	});
};


reportQueries.getReport = async (reportId) => {

	return new Promise((resolve, reject) => {

		if (!reportId) {
			return reject('No Report found');
		}

		const path = 'https://hra-api.ghmcorp.com/api/v2/get_report_data';
		const body = `{"get_report_data.client_id":"fitnessfair","get_report_data.report_id":"${reportId}"}`;

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

	const path = 'https://hra-api.ghmcorp.com/api/v2/get_report_pdf';


	return new Promise((resolve, reject) => {

		if (!reportId) {
			return reject('No Report found');
		}

		const formdata = new FormData();
		formdata.append('json', `{"get_report_pdf.client_id":"fitnessfair","get_report_pdf.report_id":"${reportId}"}`);
		formdata.append('signer', 'e650303e-e1e1-11e6-b68a-42010af00005@api.ghmcorp.com');
		formdata.append('signature', '9f1c026cb6795e7a0a53ab33c7304053cae51eea5653d6faed59e9a5c0547aa8');

		httpFetch
			.post(path, formdata)
			.then(resp => resp.blob())
			.then(response => resolve(response))
			.catch(err => reject(err));
	});
};

export default Object.freeze(reportQueries);
