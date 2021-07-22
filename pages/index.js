import Layout from '../components/layout'

const Index = () => (
    <Layout>
        {/* Header Card*/}
        <header className='container'>  
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="" alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-8">
                            <h1>Jeustin Espinoza</h1>
                            <h3>Front-end Developer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus iste aspernatur, maiores ratione facilis? Vel esse quam dolore laudantium eum provident fugiat iusto mollitia officiis. Minus necessitatibus nihil perferendis.</p>
                            <a href="/hireme">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card-bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
            <div className="card-bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default Index