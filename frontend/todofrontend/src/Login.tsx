import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css"; // ✅ CSS ファイルをインポート

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("accessToken", data.access);
                localStorage.setItem("refreshToken", data.refresh);
                navigate("/");
            } else {
                setError("ログインに失敗しました");
            }
        } catch (error) {
            setError("ネットワークエラーが発生しました。");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">ログイン</h2>

                {error && <p className="error-message">{error}</p>}

                <input
                    type="text"
                    placeholder="ユーザー名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleLogin} className="login-button">
                    ログイン
                </button>

                <p className="signup-link">
                    アカウントをお持ちでないですか？{" "}
                    <button onClick={() => navigate("/signup")} className="signup-button">
                        新規登録
                    </button>
                </p>
            </div>
        </div>
    );
}
