import Form from "../Form/Form";
import styles from './App.module.scss';
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  return (
    <div className={styles.app}>
      <Form/>
      <InfoTooltip/>
    </div>
  );
}

export default App;
