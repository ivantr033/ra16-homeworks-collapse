// import Collapse from './components/Collapse';
import BootstrapCollapse from './components/BootstrapCollapse';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Компонент Collapse (Анимация и Композиция)</h2>

      {/* ВАРИАНТ 1: С текстом по умолчанию ("Развернуть" / "Свернуть") */}
      <BootstrapCollapse>
        <p>
          Это содержимое collapse компонента. Здесь может быть любой контент:
          текст, изображения, другие компоненты. Компонент должен плавно разворачиваться
          и сворачиваться при клике на кнопку.
        </p>
      </BootstrapCollapse>

      {/* ВАРИАНТ 2: С кастомными надписями свойств (Props) */}
      <BootstrapCollapse collapsedLabel="Показать подробности ⚙️" expandedLabel="Скрыть настройки ✕">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label><input type="checkbox" /> Включить уведомления</label>
          <label><input type="checkbox" /> Темный режим интерфейса</label>
        </div>
      </BootstrapCollapse>
    </div>
  );
}

export default App;
