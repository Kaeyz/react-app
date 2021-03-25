import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import styled from 'styled-components';
import graystar from '../../assets/graystar.jpg';
import img from '../../assets/testimony1.png';
import img2 from '../../assets/testimony2.png';
import img3 from '../../assets/testimony3.png';
import img4 from '../../assets/testimony4.jpg';
import img5 from '../../assets/testimony5.jpg';
import img6 from '../../assets/testimony6.jpg';
import img7 from '../../assets/testimony7.jpg';
import yellowstar from '../../assets/yellowstar.png';
import Container from '../common/Container';

const Wrapper = styled.div`
  padding: 4rem 0 6rem 0;
  text-align: center;

  h1.heading {
    position: relative;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  h1.heading::after {
    content: " ";
    position: absolute;
    top: 82%;
    width: 5%;
    height: 5px;
    background-color: ${(props) => props.theme.color.brand_04};
    border-radius: 14px;
    left: 48%;
  }
  .paper {
    padding: 3rem 8rem;
    width: 85%;
    border-radius: 15px;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 30px;
      width: 100%;
    }
  }
  .dp,
  .switch {
    height: 65px;
    display: inline-block;
    width: 65px;
    margin-bottom: 2rem;
  }
  .switch {
    position: absolute;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      position: relative;
    }
  }
  .switch .sm {
    height: 60px;
    width: 60px;
  }
  .md {
    height: 85px;
    width: 85px;
  }
  .bg,{
    width: 110px;
    height: 110px;
  }
.unikem {
  margin: 20px auto auto auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 85px;
      height: 85px;
    }
  }
  .dp img,
  .switch img, .unikem img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    cursor: pointer;

  }
  .switch img {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .title {
    font-size: 2.5rem;
    font-weight: 600;
    opacity: 0.8;
  }
  .details {
    line-height: 2.5rem;
    margin-bottom: 3rem;
  }
  .name {
    font-size: 1.7rem;
    line-height: 0.9rem;
  }
  .star {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .testifiers {
    position: relative;
  }
  .dept{
    line-height: 17px;
    margin-top: 15px;
}
  }
  .testifiers .images {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .star img {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }
  .graystar {
    margin-right: 0;
  }
  .gridy {
    display: grid;
    grid-template-columns: 19% 60% 19%;
    grid-gap: 2%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr;
    }
  }
  .grid1 .md {
    right: 0;
    bottom: 20px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      bottom: auto;
    }
  }
  .grid1 .sm {
    left: 11px;
    top: 189px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      left: auto;
      top: auto;
    }
  }
  .grid1 .bg {
    top: 20px;
    right: 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: auto;
    }
  }
  .grid3 .sm {
    left: 0;
    bottom: 40px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      bottom: auto;
    }
  }
  .grid3 .md {
    top: 0;
    right: 50%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      right: auto;
    }
  }
  .grid3 .bg {
    top: 32%;
    right: 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      top: auto;
    }
  }
`;
class Testimonials extends Component {
	constructor(props) {
		super(props);

		// Set initial state
		this.state = {
			dp: img,
			title: 'It was a great impactful!',
			details:
        'A big Thank You to the Fitness Fair team for always being organized, prompt and providing added value to our Customer Appreciation Programs. The technology driven health assessments conducted were impactful while raising awareness on health,fitness and general wellbeing.',
			name: 'Elizabeth Agugoh',
			dept: 'Head, Marketing & Corporate Communications, FBN Insurance',
		};

		// Binding this keyword
		this.handleClick = this.handleClick.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClick3 = this.handleClick3.bind(this);
		this.handleClick4 = this.handleClick4.bind(this);
		this.handleClick5 = this.handleClick5.bind(this);
		this.handleClick6 = this.handleClick6.bind(this);
		this.handleClick7 = this.handleClick7.bind(this);
	}

	handleClick() {
		// Changing state
		this.setState({
			dp: img,
			title: 'It was impactful!',
			details:
        'A big Thank You to the Fitness Fair team for always being organized, prompt and providing added value to our Customer Appreciation Programs. The technology driven health assessments conducted were impactful while raising awareness on health,fitness and general wellbeing.',
			name: 'Elizabeth Agugoh',
			dept: 'Head, Marketing & Corporate Communications, FBN Insurance',
		});
	}
	handleClick2() {
		// Changing state
		this.setState({
			dp: img2,
			title: 'Very unique',
			details:
        'Thank you for the knowledge and influence on our employees, the uniquely tailored programs on Nutrition, Fitness, Lifestyle, and Medical numbers has reframed the mindset around health and wholesome living in this Organization and beyond. ',
			name: 'Gabriel Orukpe',
			dept: 'EHSSQ Lead, Enyo Retail and Supply Ltd',
		});
	}
	handleClick3() {
		// Changing state
		this.setState({
			dp: img3,
			title: 'So helpful',
			details:
        'You are one of the key drivers in a total lifestyle change of myself and members of my team. The simple communication of tools and guides by The Choose Life Team made this possible. Your tracking method has helped keep us accountable',
			name: 'Nnenna Agu',
			dept: 'Practice Administrator, Streamsowers and Kohn',
		});
	}
	handleClick4() {
		// Changing state
		this.setState({
			dp: img4,
			title: 'Satisfied',
			details:
        'Thank you for the knowledge and influence on our employees, the uniquely tailored programs on Nutrition, Fitness, Lifestyle and Medical numbers has reframed the mindset around health and wholesome living in this Organization and beyond. ',
			name: '',
			dept: 'Unicane Industries',
		});
	}
	handleClick5() {
		// Changing state
		this.setState({
			dp: img5,
			title: 'Awesome',
			details:
        'Thank you so much for always being so impactful and helpful in our Wellness programs. It has made such a huge difference and motivated us all at Nepal Oil and Gas that healthy living is achievable and possible even while at work. Kudos to your efficient team in your ability to run a successful wellness program! ',
			name: '',
			dept: 'Nepal Oil and Gas',
		});
	}
	handleClick6() {
		// Changing state
		this.setState({
			dp: img6,
			title: 'Wonderful and Effective',
			details:
        'Our onsite screening event could not have gone any better. The staff was wonderful and the event flowed smoothly and no one had to wait unnecessarily. The Fitness Fair lead was very thorough in her communications and expectations of her staff to deliver. The company has remained effective in transitioning to online webinars that have impacted our staff through this Covid 19 pandemic. ',
			name: 'Oluwakemi Oyinloye',
			dept: 'Human Resources, First Pensions Custodians',
		});
	}
	handleClick7() {
		// Changing state
		this.setState({
			dp: img7,
			title: 'Knowledgeable, creative, and solutions-based',
			details:
        'It is such a joy working with Fitness Fair. They are so knowledgeable, creative, and solutions-based. The team has so much passion for what they do and customizes our program to get the best results. They pay attention to wellness analytics and create our program as need be.',
			name: '',
			dept: 'Unikem Industries',
		});
	}

	render() {
		return (
			<Wrapper>
				<Container>
					<h1 className="heading">Testimonials</h1>
					<div className="gridy">
						<div className="grid1 testifiers">
							<div className="images">
								<div onClick={this.handleClick3} className="switch bg">
									<img src={img3} alt="Testifier" />
								</div>
								<div className="switch sm" onClick={this.handleClick}>
									<img src={img} alt="Testifier" />{' '}
								</div>
								<div className="switch md" onClick={this.handleClick2}>
									<img src={img2} alt="Testifier" />{' '}
								</div>
							</div>
						</div>

						<div className="grid2">
							<Paper elevation={5} className="paper">
								<div className="dp">
									<img src={this.state.dp} alt="" />
								</div>
								<p className="title">{this.state.title}</p>
								<div className="star">
									<img src={yellowstar} alt="yellowstar" />
									<img src={yellowstar} alt="yellowstar" />
									<img src={yellowstar} alt="yellowstar" />
									<img src={yellowstar} alt="yellowstar" />
									<img src={graystar} alt="graystar" className="graystar" />
								</div>
								<p className="details">{this.state.details}</p>
								<div className="info">
									<p className="name">{this.state.name}</p>
									<p className="dept">{this.state.dept}</p>
								</div>
							</Paper>

						</div>
						<div className="grid3 testifiers">
							<div className="images">
								<div className="switch md" onClick={this.handleClick4}>
									<img src={img4} alt="Testifier" />{' '}
								</div>
								<div className="switch bg" onClick={this.handleClick5}>
									<img src={img5} alt="Testifier" />{' '}
								</div>
								<div className="switch sm" onClick={this.handleClick6}>
									<img src={img6} alt="Testifier" />{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="unikem" onClick={this.handleClick7}>
						<img src={img7} alt="unikem"/>
					</div>
				</Container>
			</Wrapper>
		);
	}
}

export default Testimonials;
