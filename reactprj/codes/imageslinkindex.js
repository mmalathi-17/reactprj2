import ReactDOM from 'react-dom/client'
import App from './App'
const p="https://th.bing.com/th/id/OIP.U6I4Kme-_FFSpFB8wRHTNwHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7"
const p1="https://th.bing.com/th?id=OIP.6by-gU45XSpbF4r6vtch1wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
const p2="https://th.bing.com/th/id/OIP.BN_q1JFmtcQUdHYkp6vkkwHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
        <>
        <App pic1={p} price="12000" 
        pic2={p1} price="17000"
        pic3={p2} price="18000"/>
        </>
)