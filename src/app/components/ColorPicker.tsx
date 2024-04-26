import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

interface ColorPickerProps {
  fnSelectedColor: (color: string) => void;
}

const ColorPicker = ({ fnSelectedColor }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      toast.success("Copied!", {
          autoClose: 2000
      });
      setCopied(false);
    }
  }, [copied]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fnSelectedColor(event.target.value);
    setSelectedColor(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Color Picker</h1>
      <div className="flex items-center mb-4">
        <input
          type="color"
          id="colorPicker"
          className="mr-2"
          value={selectedColor}
          onChange={handleColorChange}
        />
        <span
          id="currentColor"
          className="text-gray-600 flex items-center gap-2"
        >
          Selected Color:{" "}
          <CopyToClipboard text={selectedColor} onCopy={() => setCopied(true)}>
            <div className="bg-gray-200 px-2 py-1 rounded-lg cursor-pointer">
              {selectedColor}
            </div>
          </CopyToClipboard>
        </span>
      </div>
      <div
        id="colorBox"
        className="w-32 h-32 rounded-md border border-gray-400"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </div>
  );
};

export default ColorPicker;
