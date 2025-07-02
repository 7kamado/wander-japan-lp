
import React from 'react';
import ReactDOM from 'react-dom/client';
// 【修正】ブラウザがファイルを直接見つけられるように、ファイル拡張子「.tsx」を追記します。
// これがないと、ブラウザは 'App' という名前のファイルを探しに行き、見つけられずにエラーとなります。
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
