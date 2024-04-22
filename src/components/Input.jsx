export default function Input({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <div>
      <label htmlFor={name} className="mr-2 font-bold text-text-secondary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="p-1 rounded-lg border border-text-secondary text-gray-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary active:border-primary"
      />
    </div>
  );
}
