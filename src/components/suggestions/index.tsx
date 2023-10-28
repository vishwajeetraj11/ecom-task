import suggestionStyles from "./suggestions.module.scss";

interface Props {}

const Suggestions = (props: Props) => {
  return (
    <div className={suggestionStyles.suggestionsContainer}>
      <p>Suggestions</p>
    </div>
  );
};

export default Suggestions;
