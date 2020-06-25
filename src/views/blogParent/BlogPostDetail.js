import React from 'react';
import Container from '../../components/common/Container';
import styled from 'styled-components';
import AppLayout from '../../components/layouts/appLayout/AppLayout';
import Grid from '@material-ui/core/Grid';
import MonoBlog from '../../components/blog/MonoBlog';
import img from '../../assets/wellnessNav/lifestyle.svg';
import spread from '../../assets/woman-spreading-both-her-arms.svg';


const Wrapper = styled.div`
margin-bottom:7rem;
	.headP {
		font-size: 3rem;
		line-height: 3.2rem;
		font-weight: 600;
		color: ${(props) => props.theme.color.text_01};
		margin: 6.6rem 0rem 0rem 0rem;
	}
	.upper
		h4,longDetail{
			font-size: 1.6rem;
			line-height: 2.4rem;
			color: ${(props) => props.theme.color.text_02};
			font-weight: 300;
			margin: 2rem 0;
		}
		img{
			width: 2.4rem;
			height: 2.4rem;
			margin-right: 0.4rem;
		}
		.orangePc{
			color: ${(props) => props.theme.color.brand_01};
			font-size: 1.4rem;
			line-height: 2.4rem;
			letter-spacing: .075rem;
		}
	.detailbg{
		background: url(${spread});
		height: 424px;
margin-bottom:7rem
	}
`;

const card = {
	title: 'Healthy Living',
	description:
		'Using our algorithm, we carry out a preliminary assessment to understand the state of your health and determine how best to serve you!',
};

function BlogPostDetail() {
	return (
		<AppLayout>
			<Wrapper>
				<Container>
					<div className="upper">
						<div className="sub-header">
							<p className="headP">Learning to Choose Wellness</p>

							<p
								className="orangeP"
								style={{ display: 'flex', marginTop: '1.5rem' }}
							>
								<img src={img} alt="img" />
								LIFESTYLE
							</p>
							<h4>Published on 29/06/2020</h4>
						</div>
						<div>
							<div className="detailbg"></div>
							<p className="longDetail">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
								posuere posuere cursus quisque sodales. Tortor malesuada
								malesuada blandit sit sed egestas. Nunc consequat feugiat nunc,
								erat sed. Id consequat nulla posuere risus tincidunt gravida. Ac
								mi aliquet imperdiet turpis a, iaculis volutpat. Interdum sem ut
								eu aliquam sed ac dolor libero tempus. Vitae sit a, quis enim,
								neque consectetur fames quam. Egestas leo ultricies nulla sed
								aenean. Leo dolor ut gravida odio. Feugiat quis donec auctor
								commodo lacus. Imperdiet ultricies donec nisl, eget. Vestibulum,
								pellentesque proin facilisis tellus vitae a, scelerisque. Eget
								nulla praesent cursus ante eget augue sit fusce. Rhoncus morbi
								aliquam dui purus ut a. Venenatis neque molestie arcu duis
								lobortis orci volutpat egestas. In est in fringilla nulla
								interdum hac. Vitae enim velit morbi id. Dictumst est, egestas
								imperdiet nam nisi. Volutpat diam, risus convallis congue. Mi ut
								hendrerit blandit magna tincidunt mauris eget. Pulvinar a
								pellentesque tellus elementum, mauris. Nulla venenatis sagittis
								et aliquet. Vestibulum rutrum ultrices gravida tincidunt lectus
								at odio sollicitudin vivamus. Est, purus pharetra, sit non.
								Pellentesque ac placerat adipiscing nibh odio varius consectetur
								a feugiat. Varius pulvinar non enim, erat. Odio maecenas
								hendrerit libero leo praesent ipsum neque. Tincidunt libero
								elementum consequat.
							</p>
						</div>
					</div>

					<div className="lower">
						<p className="headP">Similar Posts</p>

						<Grid container spacing={3}>
							<Grid item xs={4}>
								<MonoBlog color="white" data={card} />
							</Grid>
							<Grid item xs={4}>
								<MonoBlog color="white" data={card} />
							</Grid>
							<Grid item xs={4}>
								<MonoBlog color="white" data={card} />
							</Grid>
						</Grid>
					</div>
				</Container>
			</Wrapper>
		</AppLayout>
	);
}

export default BlogPostDetail;
