import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        return (
          <Input
            value={value}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
      case "textarea":
        return (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            type={getControlItem.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) =>
              setFormData({
                ...formData,
                [getControlItem.name]: val,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.Label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>

      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
