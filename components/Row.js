export default class Row extends React.Component {
	render () {
		const { children, cls } = this.props
		return (
			<div className="container" >
				<div className={cls} >
					{children}
				</div>
				<style>{`
					.container {
						width: 90%;
						max-width: 90%;
						margin: 0 auto;
						z-index: 1;
					}
					.row {
						display: flex;
						flex-wrap: wrap;
						width: 100%;
					}
				`}</style>
			</div>
		)
	}
}