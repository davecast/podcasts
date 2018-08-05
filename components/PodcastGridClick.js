import Link from 'next/link'
import slug from '../helpers/slug'

export default class PodcastGrid extends React.Component {
	render () {
		const { audio_clips, onClickPodcast } = this.props

		return (
			<div className="podcast">
				{
					audio_clips.map((clip)=>{
						return <a 
							href={`/${slug(clip.channel.title)}.${clip.channel.id}/${slug(clip.title)}.${clip.id}`} 
							key={clip.id} 
							className="podcast_link"
							onClick={ (e) => onClickPodcast(e, clip) }
						>
							<figure>
								<img src={`${clip.urls.image || clip.channel.urls.logo_image.original}`} alt={clip.title} />
							</figure>
							<div>
								<h3>{ clip.title }</h3>
								<div className="meta">
									{ Math.ceil(clip.duration / 60) } minutes
								</div>
							</div>
						</a>
					})
				}
				
				<style jsx>{`
			        .podcast {
			          padding: 15px;
			        }
			        figure {
						margin: 0;
						font-size: 0;
						height: 30px;
						width: 30px;
						overflow: hidden;
						float: left;
						padding-right: 10px;
			        }
			        figure img {
			        	max-width:100%;
			        }
			        .podcast_link {
			          display: block;
			          text-decoration: none;
			          color: #333;
			          border-bottom: 1px solid rgba(0,0,0,0.2);
			          cursor: pointer;
			          margin-bottom: 10px;
			        }
			        .podcast_link:hover {
			          color: #000;
			        }
			        .podcast h3 {
			          margin: 0;
			          font-size: 15px;
			        }
			        .podcast .meta {
			          color: #666;
			          margin-bottom: 0.5em;
			          font-size: 12px;
			        }
			        @media screen and (max-width: 768px) {
						.podcast {
				          padding: 0px;
				        }
					}
			      `}</style>
			</div>
		)
	}
}