import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div>
            <section id="Contact">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="mt-5 text-center">Contact Me</h1>
                            <div className="text-center" style={{ fontSize: "12px" }}>
                                Get in touch
                            </div>
                            {/* <hr className='w-25 mx-auto' /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex flex-wrap align-items-start">
                            <div
                                className="w-75 mb-4"
                                style={{
                                    width: "200px",
                                    fontWeight: "bold",
                                    marginLeft: "350px",
                                }}
                            >
                                Talk to me{" "}
                            </div>
                            <div
                                className="card p-3 me-4"
                                style={{
                                    width: "309.24px",
                                    height: "152px",
                                    border: "1px solid #D4D4D4",
                                    borderRadius: "16px",
                                    marginLeft: "250px",
                                }}
                            >
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                                    <div className="text-center" style={{ marginTop: "-25px" }}>Email</div>
                                    <div className="text-center" style={{ marginTop: "5px", fontSize: '11px', color: 'gray' }}>user@gmail.com</div>
                                </div>
                            </div>
                            <div
                                className="card p-3 me-4"
                                style={{
                                    width: "309.24px",
                                    height: "152px",
                                    border: "1px solid #D4D4D4",
                                    borderRadius: "16px",
                                    marginLeft: "250px",
                                    marginTop: "30px",
                                }}
                            >
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                                    <div className="text-center" style={{ marginTop: "-25px" }}>WhatsApp</div>
                                    <div className="text-center" style={{ marginTop: "5px", fontSize: '11px', color: 'gray' }}>+91 12345-56780</div>
                                </div>
                            </div>
                            <div
                                className="card p-3 me-4"
                                style={{
                                    width: "309.24px",
                                    height: "152px",
                                    border: "1px solid #D4D4D4",
                                    borderRadius: "16px",
                                    marginLeft: "250px",
                                    marginTop: "30px",
                                }}
                            >
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                                    <div className="text-center" style={{ marginTop: "-25px" }}>Messanger</div>
                                    <div className="text-center" style={{ marginTop: "5px", fontSize: '11px' }}>user.fb123</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 d-flex flex-wrap align-items-start"
                            style={{
                                fontWeight: "bold",
                                marginRight: "-10px",
                                marginTop: "15px",
                            }}
                        >
                            <div
                                className="w-75 mb-4"
                                style={{
                                    width: "100px",
                                    marginTop: "-20px",
                                    marginLeft: "200px",
                                }}
                            >
                                Write me your project{" "}
                            </div>
                            <form
                                action=""
                                style={{
                                    width: "419px",
                                    height: "auto",
                                    marginLeft: "auto",
                                    marginRight: "150px",
                                    marginTop: "-200px",
                                }}
                            >
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Insert your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Insert your email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        placeholder="Write your project"
                                        rows="5"
                                    ></textarea>
                                    <button
                                        className="btn btn-dark mt-3"
                                        style={{ marginTop: "-15px" }}
                                    >
                                        Send Message{" "}
                                        <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
