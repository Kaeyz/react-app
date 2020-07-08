import client from '../client';

const hraQueries = {};

hraQueries.getQuestion = (input) => {
	const query =`
	query HRA_QUERY ($input: HraInputSectionsEnum ) {
          fetchHraQuestion(input: $input) {
               id
               label
               prompt
               dynamic
               options {
                    top_submit_button
               }
               qCount
               q {
                    id
                    label
                    prompt
                    required
                    default_deactive
                    system_of_measurement
                    counterpart
                    input {
                         type
                         units
                         min
                         allow_decimals
                         maxvariable
                         max
                         showhide {
                              low
                              high
                              hide
                              sum
                              show
                         }
                         values {
                              id
                              label
                         }
                    }
               }

          }
     }
  `;
	const variables = { input };
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

export default Object.freeze(hraQueries);