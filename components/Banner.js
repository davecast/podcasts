export default class Banner extends React.Component {
	render () {
		const { url, title } = this.props
		return (
			<div className="banner" style={{ backgroundImage: `url(${url})` }} >
				<h1>{title}</h1>

				<style jsx>{`
					.banner {
			          width: 100%;
			          padding-bottom: calc(25%);
			          background-position: 50% 50%;
			          background-size: cover;
			          background-color: #aaa;
			          background-attachment: scroll;
			          position: relative;
			          margin-bottom: 25px;
			        }
			        h1 {
						font-weight: 600;
						padding: 0px;
						margin: 0 auto;
						position: absolute;
						left: 0;
						right: 0;
						text-align: center;
						bottom: 0;
						top: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #fff;
						font-size: 4em;
						text-shadow: 3px 3px 2px rgba(0,0,0,0.9);
			        }
				`}</style>
			</div>
		)
	}
}