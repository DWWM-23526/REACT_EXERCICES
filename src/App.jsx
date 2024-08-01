import ValidatedInput from './exercices/ValidateInput';

function App() {
  const validateLength = (value) => value.length >= 5;
  return (
    <div>
      <h1>Validated Input</h1>
      <ValidatedInput
        validationFunction={validateLength}
        errorMessage="Input is too short (minimum 5 characters)"
      />
    </div>
  );
}

export default App;

