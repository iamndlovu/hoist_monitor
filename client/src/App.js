import AlarmBanner from './components/alarm-banner/AlarmBanner';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <section className="top">
        <header className="App-header">
          <h1>Hoist Monitor</h1>
          <AlarmBanner />
          <h3>LogIn</h3>
        </header>
      </section>
      <Container />
    </div>
  );
}

export default App;
