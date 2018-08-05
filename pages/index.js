import 'isomorphic-fetch'
import Error from './_error'
import ChannelGrid from '../components/ChannelGrid'
import Layout from '../components/Layout'
import Col from '../components/Col'
import Row from '../components/Row'

export default class extends React.Component {

    static async getInitialProps({res}) {
        try {

            let req = await fetch('https://api.audioboom.com/channels/recommended')
            let { body: channels } = await req.json()

            return { channels, statusCode: 200 }

        } catch(err) {

            res.statusCode = 503
            return { channels: null, statusCode: 503}

        }
    }

    render() {
        const { channels, statusCode } = this.props

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        return (
           <Layout title="Home - PlatziCast" >
                <Row cls="row" >
                    <Col cls="col-12">
                        <ChannelGrid channels={ channels } />
                    </Col>
                </Row>
           </Layout>
        )
    }
}