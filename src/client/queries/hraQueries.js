import { client, httpFetch } from '../client';

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


hraQueries.submitQuestion = (input) => {
	const query = `
	mutation SUBMIT_RESPONSE ($input: HRAResponseInput ){
		submitHRAResponse(input: $input) {
			message
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


hraQueries.getCurrentResponse = () => {
	const query = `
	query ME {
		me {
			hra {
				_id
				reportId
				ghmReference
			}
			currentHra {
				_id
				questionAndResponse {
					age_in_years
					arrested_dui
					bicycle_helmet_usage
					binge_drinking
					blood_glucose_mml
					blood_glucose
					blood_pressure_estimated
					blood_pressure_measured_high_number
					blood_pressure_measured_low_number
					blood_pressure_medication
					body_frame_size
					butter
					caffeine
					charcoal_broiled
					chh_cough
					chh_fever
					chh_hands
					chh_interact
					chh_sbreath
					cholesterol_check
					cholesterol_level_mml
					cholesterol_level
					cholesterol_level_estimated
					cholesterol_medication
					colon_cancer_screening
					commercial_driver
					cross_contamination
					daily_cigars
					daily_marajuana
					daily_pipes
					daily_shisha
					desserts
					diabetes_status
					difficulties_piling_up
					distracted_driving
					drinking_and_driving
					driving_speed
					education
					fast_food
					felt_confident
					filling_forms
					fish
					fruit
					fruits_and_vegetables
					GADa
					GADb
					GADc
					GADd
					GADe
					GADf
					GADg
					gainful_employment
					going_your_way
					gross_weight
					hb1ac_check
					hdl_cholesterol_estimated
					hdl_cholesterol_mml
					hdl_cholesterol
					health_information_interest
					heart_attack
					heart_disease
					height_cm
					height_feet
					height_inches
					height
					helmet_usage
					high_cholesterol_food
					hispanic_origin
					home_safety
					household_income
					hysterectomy
					insurance_coverage
					junk_food
					last_mammogram
					marital_status
					misfortune
					overall_health
					pap_smear_test
					PHQa
					PHQb
					PHQc
					PHQd
					PHQe
					PHQf
					PHQg
					PHQh
					PHQi
					protein
					race
					readiness_to_eat_healthier
					readiness_to_exercise_more
					readiness_to_quit_smoking
					readiness_to_reduce_alcohol_usage
					resting_heart_rate
					road_rage
					safety_belt_usage
					save_key
					sex
					sleep1
					sleep2
					sleep3
					sleep4
					smokeless_tobacco
					smoking
					soft_drinks
					state_of_residence
					still_smoke
					stroke
					sugar_beverage
					travel_by_automobile_km
					travel_by_automobile
					travel_by_motorcycle_km
					travel_by_motorcycle
					triglycerides
					type_of_license
					typical_travel_method
					unable_to_control
					used_to_smoke_cigarettes_day
					used_to_smoke_cigars_day
					used_to_smoke_pipes_day
					vaping_freq
					vaping
					vegetables
					weekly_alcohol_beer
					weekly_alcohol_mixed_drinks
					weekly_alcohol_wine_coolers
					weekly_alcohol_wine
					weekly_physical_activity
					weight_kg
					weight
					years_as_driver
					years_since_quitting_months
					years_since_quitting_years
				}
				ghmReference
				percentageProgress
				reportId
				createdAt
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


hraQueries.getHraReportData = async () => {

	const res = await hraQueries.getCurrentResponse();
	const { reportId } = res.data.me.currentHra;

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


hraQueries.getReportPdf = async () => {

	const res = await hraQueries.getCurrentResponse();
	const { reportId } = res.data.currentUserResponse;

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


export default Object.freeze(hraQueries);
