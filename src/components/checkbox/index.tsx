import checkboxStyles from "./checkbox.module.scss";

interface Props {
  name: string;
  label: React.ReactNode;
  id: string;
}

export const CheckboxWithLabel = ({ name, label, id }: Props) => {
  return (
    <div className={checkboxStyles.checkboxContainer}>
      <input
        className={checkboxStyles.checkboxInput}
        type="checkbox"
        name={name}
        id={id}
      />
      <label htmlFor={id} className={checkboxStyles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};
