import styles from "./Modal.module.css";

const Modal = (props) => {
  const cls = [styles.Modal];
  if (props.isActive) {
    cls.push(styles.active);
  }

  return (
    <div className={cls.join(" ")} onClick={props.setInactive}>
      <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
    </div>
  );
};

export default Modal;
