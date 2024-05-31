import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux/actions/auth";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login(navigate, email, password, setLoading));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No telepon</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Contoh: john@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </Form.Group>

            <div>
                <Link
                    to="/request-reset-password"
                    className="float-end"
                    style={{ paddingBottom: "13px", color: "#7126B5" }}
                >
                    Lupa kata sandi
                </Link>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3"
                style={{ borderRadius: "12px", backgroundColor: "#7126B5" }}
                disabled={loading}
            >
                {loading ? "Loading..." : "Masuk"}
            </Button>

            <div className="text-center mb-3">
                Belum punya akun?{" "}
                <Link to={"/register"} style={{ color: "#7126B5" }}>
                    Daftar disini
                </Link>
            </div>
        </Form>
    );
}

export default Login;
