module.exports = Object.freeze({
	onBoardIndividualValidator: require('./onBoardIndividual'),
	onBoardCompanyValidator: require('./onBoardCompany'),
	onBoardEmployeeValidator: require('./newEmployeeValidation'),
	loginValidator: require('./login'),
	forgotPasswordValidator: require('./forgotPassword'),
	resetPasswordValidator: require('./resetPassword'),
	rewardInputValidator: require('./newReward'),
	createAppointmentValidator: require('./createAppointment')
});