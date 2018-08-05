export default class extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <figure className="figure">
                        <img 
                            src="/static/platzi-logo.png"
                            alt="Platzi"
                        />
                    </figure>
                    <h2 className="h2 t__c">Nos gusta aprender</h2>
                    <p className="paragraph t__c">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <style jsx global>{`
                    body {
                        background:#1c3643;
                        font-family: sans-serif;
                    }
                    .t__c {
                        text-align:center;
                    }
                    .section {
                        padding: 45px 0;
                    }
                    .container {
                        max-width: 1280px;
                        width:90%;
                        margin: 0 auto;
                    }
                    .figure {
                        margin:0 auto 15px auto;
                        font-size:0;
                        max-width: 100px;
                    }
                    
                `}</style>
            </section>
        )
    }
}