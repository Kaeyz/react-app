import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blueIcon from '../../../assets/blueIcon.svg';
import greenIcon from '../../../assets/greenIcon.svg';
import orangeIcon from '../../../assets/orangeIcon.svg';
import pinkIcon from '../../../assets/pinkIcon.svg';
import purpleIcon from '../../../assets/purpleIcon.svg';
import AppointReward from '../../../components/common/AppointReward';
import Button from '../../../components/common/Button';
import { closeReward } from '../../../store/actions/rewardActions';
import { convertDate } from '../../../utils/helper';
import Modal from '../../dashboard/common/Modal';
import EditRewardModal from './EditRewardModal';

const Wrapper = styled.div`
  .body {
    .grid {
      display: grid;
      padding-bottom: 4rem;
      grid-template-columns: 1fr 1fr;
      .text {
        font-weight: 300;
        color: ${props => props.theme.color.ui_05};
      }
      .bolder {
        font-weight: bold;
      }
    }
  }
  .bottom {
    #link {
      color: ${props => props.theme.color.ui_08};
      text-decoration: underline;
      &:hover{
        color: ${props => props.theme.color.ui_05};
        transition:.3s;
      }
    }
    .button {
      width: 100% !important;
    }
    #mb{
        padding: 3rem 0;
    }
  }
`;

const RewardDetailsModal = ({ theme, reward, closeReward }) => {
	const [show, setShow] = React.useState(false);

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	const icon = {
		pink: pinkIcon,
		blue: blueIcon,
		orange: orangeIcon,
		green: greenIcon,
		purple: purpleIcon,
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position="modal-right"
				info={reward && reward.description}
				heading={
					<span>
						<img src={icon[theme]} alt="icon" />{' '}
						{reward && reward.title}
						{reward && reward.isClosed && `${' (closed)'}`}
					</span>
				}
			>
				<div className="body">
					<div className="detail grid">
						<p className="text">Start Date</p>
						<h1 className="bolder text">
							{reward && convertDate(reward.startDate)}
						</h1>
					</div>
					<div className="detail grid">
						<p className="text">End Date</p>
						<h1 className="bolder text">
							{reward && convertDate(reward.endDate)}
						</h1>
					</div>
				</div>

				<div className="bottom">
					<p>See how your employee are performing.</p>
					<Link to="/rewards/leaderboard" id="link">
						View Leaderboard
					</Link>
				</div>

				{!reward.isClosed && (
					<div className="bottom">
						<EditRewardModal reward={reward} />
						<Grid item xs={12}>
							<Button
								theme="pinkBtn"
								text="Close Reward"
								onClick={() => closeReward(reward._id)}
							/>
						</Grid>
					</div>
				)}
			</Modal>

			<div onClick={showModal}>
				<AppointReward
					cardTheme={theme}
					icon={icon[theme]}
					info={
						reward && reward.description
							? reward.description.length > 40
								? reward.description.substring(0, 42) + '...'
								: reward.description
							: 'no description'
					}
					title={reward && reward.title}
					leftB={reward && convertDate(reward.startDate)}
					rightB={reward && convertDate(reward.endDate)}
				/>
			</div>
		</Wrapper>
	);
};

RewardDetailsModal.propTypes = {
	theme: PropTypes.string.isRequired,
	reward: PropTypes.object.isRequired,
	closeReward: PropTypes.func.isRequired,
};

export default connect(null, {closeReward})(RewardDetailsModal);
