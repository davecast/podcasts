import 'isomorphic-fetch'
import Error from './_error'
import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Banner from '../components/Banner'
// import PodcastGrid from '../components/PodcastGrid'
import PodcastGridClick from '../components/PodcastGridClick'
import Col from '../components/Col'
import Row from '../components/Row'
import PodcastPlayer from '../components/PodcastPlayer'

export default class extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			openPodcast: null
		}
	}

	static async getInitialProps ({ query, res }) {
		let idChannel = query.id
		try {
			let [ reqChannel, reqAudio, reqChidlChannels ] = await Promise.all([
				fetch(`https://api.audioboom.com/channels/${idChannel}`),
				fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
				fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
			])

			if (reqChannel.status >= 400) {
				res.statusCode = reqChannel.status
				return { channel, audio_clips, channels, statusCode: reqChannel.status }
			}

			let { body: { channel } } = await reqChannel.json()
			let { body: { audio_clips } } = await reqAudio.json()
			let { body: {channels } } = await reqChidlChannels.json()

			return { channel, audio_clips, channels, statusCode: 200 }

		} catch(err) {

			res.statusCode = 503
            return { channel:null , audio_clips: null, channels: null, statusCode: 503 }

		}
		
	}

	openPodcast = (e, podcast) => {
		e.preventDefault()
		this.setState({
			openPodcast: podcast
		})
	}
	closePodcast = (e) => {
		e.preventDefault()
		this.setState({
			openPodcast: null
		})
	}
	render () {
		const { channel, audio_clips, channels, statusCode } = this.props
		const { openPodcast } = this.state

		if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

		return(
			<Layout title={`${channel.title} - Platzi Cast`}>

				<Banner url={channel.urls.banner_image.original} title={channel.title} />

				{ openPodcast && 
					<div className="modal">
						<PodcastPlayer clip={openPodcast} onClose={ this.closePodcast } />
					</div> 
				}

				<Row cls="row" >
					<Col cls="col-8 col-sm-12 ">
						<h2>Series</h2>
						{ channels.length > 0 && 
							<ChannelGrid channels={channels} />
						}
					</Col>
					<Col cls="col-4 col-sm-12 ">
						<h2>Ultimos Podcasts</h2>
						<PodcastGridClick audio_clips={audio_clips} onClickPodcast={this.openPodcast} />
					</Col>
				</Row>

				<style jsx>{`
					h2 {
						padding: 15px;
						font-weight: 600;
						margin: 0;
						font-size: 23px;
						color: #313131;
                    }

			        .modal {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: 99999;
			        }
                    @media screen and (max-width: 768px) {
						h2 {
							text-align:center;
							margin-bottom: 15px;
						}
					}
				`}</style>
			</Layout>
		)
	}
}