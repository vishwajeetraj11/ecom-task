import checkboxStyles from "./checkbox.module.scss";

interface Props {
  name: string;
  label: React.ReactNode;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxWithLabel = ({ name, label, id, onChange }: Props) => {
  return (
    <div className={checkboxStyles.checkboxContainer}>
      <input
        className={checkboxStyles.checkboxInput}
        type="checkbox"
        name={name}
        onChange={onChange}
        id={id}
      />
      <label htmlFor={id} className={checkboxStyles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};
