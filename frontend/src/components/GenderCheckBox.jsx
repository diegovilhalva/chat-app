

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {


    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender  === 'male' ? "selected" :""}`}>
                    <span className="text-gray-100">Masculino</span>
                    <input type="checkbox" className="checkbox  checkbox-info"  checked={selectedGender === "male"} onChange={() => onCheckboxChange("male")} />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer  ${selectedGender  === 'female' ? "selected" :""} `}>
                    <span className="text-gray-100">Feminino</span>
                    <input type="checkbox" className="checkbox checkbox-info" checked={selectedGender === "female"} onChange={() => onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox