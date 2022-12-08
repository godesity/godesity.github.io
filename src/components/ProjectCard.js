import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import "../assets/styles/projectStyle.css";

export default function ProjectCard() {
    return (
        <div className="project-card-style">
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={require("../assets/imgs/example.png")} alt="lorem ipsum" />
                            <div className="card-body">
                                <h5 className="card-title">hello world!</h5>
                                <p className="card-text">Exercitation esse occaecat culpa consequat et occaecat Lorem ex ea.</p>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={require("../assets/imgs/example.png")} alt="lorem ipsum" />
                            <div className="card-body">
                                <h5 className="card-title">hello world!</h5>
                                <p className="card-text">Nostrud nulla exercitation ipsum laborum.</p>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={require("../assets/imgs/example.png")} alt="lorem ipsum" />
                            <div className="card-body">
                                <h5 className="card-title">hello world!</h5>
                                <p className="card-text">Nulla sit magna minim est sit laboris tempor sint fugiat nulla aute esse laborum eu.</p>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={require("../assets/imgs/example.png")} alt="lorem ipsum" />
                            <div className="card-body">
                                <h5 className="card-title">hello world!</h5>
                                <p className="card-text">Exercitation esse occaecat culpa consequat et occaecat Lorem ex ea.</p>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={require("../assets/imgs/example.png")} alt="lorem ipsum" />
                            <div className="card-body">
                                <h5 className="card-title">hello world!</h5>
                                <p className="card-text">Nostrud nulla exercitation ipsum laborum.</p>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src={require("../assets/imgs/example.png")} alt="lorem ipsum" />
                            <div className="card-body">
                                <h5 className="card-title">hello world!</h5>
                                <p className="card-text">Nulla sit magna minim est sit laboris tempor sint fugiat nulla aute esse laborum eu.</p>
                                <Button variant="primary">Go somewhere</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}