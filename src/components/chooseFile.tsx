import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import SelectLangue from "@/components/Inputselect";

const InputFile = () => {
  return (
    <div className="grid w-full space-y-3 max-w-sm items-center gap-1.5">
      <div className="flex">
        <SelectLangue />
      </div>
      <div className="flex space-x-3">
        <Input
          id="picture"
          className="shadow-xl bg-white border-gray-100"
          type="file"
        />
        <Button className="bg-blue-400 text-white w-44 shadow-xl rounded-xl hover:bg-blue-400">
          <p>Enregistrer</p>
        </Button>
      </div>
    </div>
  );
};
export default InputFile;
