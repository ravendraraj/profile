import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import "./textField.scss";
export default function index({
  type,
  // icon,
  value,
  name,
  placeholder,
  onChange,
  endAdornment,
  defaultValue,
  onKeyPress,
  onPaste,
  labelClassNames,
  title,
  title_icon,
  title_icon_class,
  rightIcon,
}) {
  return (
    <div className="customTextfield">
      <div className="custom_label_box">
        {title_icon && title_icon}
        {title && (
          <InputLabel id="label" className={labelClassNames}>
            {" " + title}
          </InputLabel>
        )}
      </div>
      <FormControl fullWidth>
        <OutlinedInput
          style={{ backgroundColor: "#fff" }}
          value={value}
          endAdornment={rightIcon}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultValue}
          variant="outlined"
          fullWidth
          onKeyPress={onKeyPress}
          onPaste={onPaste}
        />
      </FormControl>
    </div>
  );
}
