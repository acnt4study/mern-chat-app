type GenderCheckboxProps = {
  val: string;
  onChange: (gen: string) => void;
};

const GenderCheckbox = ({ onChange, val }: GenderCheckboxProps) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Male</span>
          <input
            checked={val === 'male'}
            onChange={() => onChange('male')}
            type="checkbox"
            className={`checkbox border-slate-900 ${val === 'male' ? 'selected' : ''}`}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            checked={val === 'female'}
            onChange={() => onChange('female')}
            type="checkbox"
            className={`checkbox border-slate-900 ${val === 'female' ? 'selected' : ''}`}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
