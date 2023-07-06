import styles from "./ModalWindow.module.css";

const ModalWindow = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
export default ModalWindow;
