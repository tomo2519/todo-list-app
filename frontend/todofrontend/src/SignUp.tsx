// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SignUp() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleSignUp = async () => {
//         setError(""); // エラーをクリア
//         try {
//             const response = await fetch("http://127.0.0.1:8000/api/register/", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 alert("登録成功！ログインしてください。");
//                 navigate("/login"); // ログイン画面へ遷移
//             } else {
//                 const data = await response.json();
//                 setError(data?.message || "登録に失敗しました。");
//             }
//         } catch (error) {
//             setError("ネットワークエラーが発生しました。");
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h2 className="text-2xl font-bold mb-4">新規登録</h2>
//             {error && <p className="text-red-500">{error}</p>}
//             <input
//                 type="text"
//                 placeholder="ユーザー名"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="border p-2 mb-2 w-64"
//             />
//             <input
//                 type="password"
//                 placeholder="パスワード"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="border p-2 mb-2 w-64"
//             />
//             <button
//                 onClick={handleSignUp}
//                 className="bg-blue-500 text-white px-4 py-2 rounded w-64"
//             >
//                 登録
//             </button>
//             <p className="mt-4">
//                 すでにアカウントをお持ちですか？{" "}
//                 <button
//                     onClick={() => navigate("/login")}
//                     className="text-blue-500 underline"
//                 >
//                     ログイン画面へ
//                 </button>
//             </p>
//         </div>
//     );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SignUp.css"; // ✅ CSSファイルをインポート

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setError("");
        setMessage("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setMessage("✅ 登録成功！ログインしてください。");
                setTimeout(() => navigate("/login"), 2000);
            } else {
                const data = await response.json();
                setError(data?.message || "❌ 登録に失敗しました。");
            }
        } catch (error) {
            setError("⚠️ ネットワークエラーが発生しました。");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>新規登録</h2>

                {message && <p className="success-message">{message}</p>}
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
                <button onClick={handleSignUp} className="signup-button">
                    登録
                </button>

                <p className="login-link">
                    すでにアカウントをお持ちですか？{" "}
                    <button onClick={() => navigate("/login")} className="login-button">
                        ログイン画面へ
                    </button>
                </p>
            </div>
        </div>
    );
}
