import './App.css';
import Card from './component/Card';
function App() {

  return (
    <>
      <h1 className='font-xl bg-red-400 text-black p-4 rounded-3xl mb-8'>Tailwind With React </h1>
      <Card userName="Ismail " btnText="Visit Me" />
      <Card userName="Shaikh " btnText="Explor Me" />
      <Card userName="Ibbo " btnText="Get Me" />
      <Card userName=" " btnText="Get Me" />
    </>
  )
}

export default App
