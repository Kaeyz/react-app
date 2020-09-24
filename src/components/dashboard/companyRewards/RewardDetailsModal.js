import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeReward } from '../../../store/actions/rewardActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../../dashboard/common/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '../../../components/common/Button';
import pinkIcon from '../../../assets/pinkIcon.svg';
import AppointReward from '../../../components/common/AppointReward';
import EditRewardModal from './EditRewardModal';
import { convertDate } from '../../../utils/helper';
import blueIcon from '../../../assets/blueIcon.svg';
import orangeIcon from '../../../assets/orangeIcon.svg';
import greenIcon from '../../../assets/greenIcon.svg';
import purpleIcon from '../../../assets/purpleIcon.svg';

const Wrapper = styled.div`
  .body {
    .grid {
      display: grid;
      padding-bottom: 4rem;
      grid-template-columns: 1fr 1fr;
      .text {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.2rem;
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
						<img src={icon[theme]} alt="icon" />
						{reward && reward.title}
					</span>
				}
			>
				<div className="body">
					<div className="detail grid">
						<p className="text">Start Date</p>
						<h1 className="bolder text">{reward && convertDate(reward.startDate) }</h1>
					</div>
					<div className="detail grid">
						<p className="text">End Date</p>
						<h1 className="bolder text">{reward && convertDate(reward.endDate) }</h1>
					</div>
				</div>

				<div className="bottom">
					<p>See how your employee are performing.</p>
					<Link to="/leaderboard" id="link">
						View Leaderboard
					</Link>
				</div>

				<div className="bottom">
					<EditRewardModal reward={reward} />
					<Grid item xs={12} >
						<Button theme="pinkBtn" text="Close Reward" onClick={() => closeReward(reward._id)} />
					</Grid>
				</div>
			</Modal>

			<div onClick={showModal}>
				<AppointReward
					cardTheme={theme}
					icon={icon[theme]}
					info={reward && reward.description}
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
