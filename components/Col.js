export default class Col extends React.Component {
	render () {
		const { children, cls } = this.props
		return (
			<div className={cls} >
				{children}

				<style>{`

					.col-1 {width: 8.33%;}
					.col-2 {width: 16.67%;}
					.col-3 {width: 25%;}
					.col-4 {width: 33.33%;}
					.col-5 {width: 41.67%;}
					.col-6 {width: 50%;}
					.col-7 {width: 58.33%;}
					.col-8 {width: 66.67%;}
					.col-9 {width: 75%;}
					.col-10 {width: 83.33%;}
					.col-11 {width: 91.67%;}
					.col-12 {width: 100%;}
					.col-offset-1 {margin-left: 8.33%;}
					.col-offset-2 {margin-left: 16.67%;}
					.col-offset-3 {margin-left: 25%;}
					.col-offset-4 {margin-left: 33.33%;}
					.col-offset-5 {margin-left: 41.67%;}
					.col-offset-6 {margin-left: 50%;}
					.col-offset-7 {margin-left: 58.33%;}
					.col-offset-8 {margin-left: 66.67%;}
					.col-offset-9 {margin-left: 75%;}
					.col-offset-10 {margin-left: 83.33%;}
					.col-offset-11 {margin-left: 91.67%;}
					.col-offset-12 {margin-left: 100%;}

					@media screen and (max-width: 992px) {
    
					    .container {
					        width: 100%;
					    }

					    .col-offset-1 {margin-left: 0%;}
					    .col-offset-2 {margin-left: 0%;}
					    .col-offset-3 {margin-left: 0%;}
					    .col-offset-4 {margin-left: 0%;}
					    .col-offset-5 {margin-left: 0%;}
					    .col-offset-6 {margin-left: 0%;}
					    .col-offset-7 {margin-left: 0%;}
					    .col-offset-8 {margin-left: 0%;}
					    .col-offset-9 {margin-left: 0%;}
					    .col-offset-10 {margin-left: 0%;}
					    .col-offset-11 {margin-left: 0%;}
					    .col-offset-12 {margin-left: 0%;}
					    

					    .col-md {padding-right: 1.5em;padding-left: 1.5em;}

					    .col-md-1 {width: 8.33%;}
					    .col-md-2 {width: 16.67%;}
					    .col-md-3 {width: 25%;}
					    .col-md-4 {width: 33.33%;}
					    .col-md-5 {width: 41.67%;}
					    .col-md-6 {width: 50%;}
					    .col-md-7 {width: 58.33%;}
					    .col-md-8 {width: 66.67%;}
					    .col-md-9 {width: 75%;}
					    .col-md-10 {width: 83.33%;}
					    .col-md-11 {width: 91.67%;}
					    .col-md-12 {width: 100%;}
					    .col-md-offset-1 {margin-left: 8.33%;}
					    .col-md-offset-2 {margin-left: 16.67%;}
					    .col-md-offset-3 {margin-left: 25%;}
					    .col-md-offset-4 {margin-left: 33.33%;}
					    .col-md-offset-5 {margin-left: 41.67%;}
					    .col-md-offset-6 {margin-left: 50%;}
					    .col-md-offset-7 {margin-left: 58.33%;}
					    .col-md-offset-8 {margin-left: 66.67%;}
					    .col-md-offset-9 {margin-left: 75%;}
					    .col-md-offset-10 {margin-left: 83.33%;}
					    .col-md-offset-11 {margin-left: 91.67%;}
					    .col-md-offset-12 {margin-left: 100%;}
					}

					@media screen and (max-width: 768px) {

					    .col-sm {padding-right: 1em;padding-left: 1em;}
					    .col-p-t {padding-top: 1.5em;padding-bottom: 1.5em; }
					    .col-md-offset-1 {margin-left: 0%;}
					    .col-md-offset-2 {margin-left: 0%;}
					    .col-md-offset-3 {margin-left: 0%;}
					    .col-md-offset-4 {margin-left: 0%;}
					    .col-md-offset-5 {margin-left: 0%;}
					    .col-md-offset-6 {margin-left: 0%;}
					    .col-md-offset-7 {margin-left: 0%;}
					    .col-md-offset-8 {margin-left: 0%;}
					    .col-md-offset-9 {margin-left: 0%;}
					    .col-md-offset-10 {margin-left: 0%;}
					    .col-md-offset-11 {margin-left: 0%;}
					    .col-md-offset-12 {margin-left: 0%;}

					    .col-sm-1 {width: 8.33%;}
					    .col-sm-2 {width: 16.67%;}
					    .col-sm-3 {width: 25%;}
					    .col-sm-4 {width: 33.33%;}
					    .col-sm-5 {width: 41.67%;}
					    .col-sm-6 {width: 50%;}
					    .col-sm-7 {width: 58.33%;}
					    .col-sm-8 {width: 66.67%;}
					    .col-sm-9 {width: 75%;}
					    .col-sm-10 {width: 83.33%;}
					    .col-sm-11 {width: 91.67%;}
					    .col-sm-12 {width: 100%;}
					    .col-sm-offset-1 {margin-left: 8.33%;}
					    .col-sm-offset-2 {margin-left: 16.67%;}
					    .col-sm-offset-3 {margin-left: 25%;}
					    .col-sm-offset-4 {margin-left: 33.33%;}
					    .col-sm-offset-5 {margin-left: 41.67%;}
					    .col-sm-offset-6 {margin-left: 50%;}
					    .col-sm-offset-7 {margin-left: 58.33%;}
					    .col-sm-offset-8 {margin-left: 66.67%;}
					    .col-sm-offset-9 {margin-left: 75%;}
					    .col-sm-offset-10 {margin-left: 83.33%;}
					    .col-sm-offset-11 {margin-left: 91.67%;}
					    .col-sm-offset-12 {margin-left: 100%;}
					}

					@media screen and (max-width: 576px) {

					}
				`}</style>
			</div>
		)
	}
}