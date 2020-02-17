//https://serverless-stack.com/chapters/create-a-login-page.html
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormattedMessage, useIntl } from "react-intl";

function Login({ onLogin }) {
    const intl = useIntl();

    const [userId, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const validateForm = () => {
        return true;
    };

    const handleSubmit = e => {
        e.preventDefault();
        onLogin(userId, pwd);
    };

    return (
        <div className="container m-0 p-0">
            <div className="row">
                <div className="col-6 offset-4">
                    <form
                        onSubmit={handleSubmit}
                        style={{ height: "675px", paddingTop: "100px" }}
                        className="form-group"
                    >
                        <Form.Group controlId="userId">
                            <Form.Label className="text-white">
                                <FormattedMessage id="login.message" />
                            </Form.Label>
                            <input
                                className="form-control"
                                autoFocus
                                type="email"
                                value={userId}
                                onChange={e => setId(e.target.value)}
                                placeholder={intl.formatMessage({ id: "login.user" })}
                            />
                        </Form.Group>
                        <Form.Group controlId="pasword">
                            <input
                                className="form-control"
                                type="password"
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                                placeholder={intl.formatMessage({ id: "login.password" })}
                            />
                        </Form.Group>
                        <div className="text-right">
                            <Button disabled={!validateForm()} type="submit" style={{ margin: "0px" }} variant="primary">
                                <FormattedMessage id={"login.button"} />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
