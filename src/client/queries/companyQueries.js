import { client } from '../client';

const companyQueries = {};

companyQueries.getCompanies = () => {
	const query =`
  query FETCH_COMPANIES($type: UserEnum) {
    usersByType(type: $type)
      {
        _id
        name
        email
        createdAt
        companyName
    }
  }
  `;

	const variables = { type: 'COMPANY' };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

companyQueries.getCompanyById = (id) => {
	const query =`
  query FETCH_COMPANY_BY_ID($id: String) {
    userById(id: $id)
      {
        _id
        companyName
        email
        companyUrl
        companySize
        employeeLimit
        address
        name
        representativeEmail
        department
        createdAt
    }
  }
  `;

	const variables = { id };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};


export default Object.freeze(companyQueries);