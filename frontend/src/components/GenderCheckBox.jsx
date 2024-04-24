

const GenderCheckBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer ">
                    <span className="text-gray-100">Masculino</span>
                    <input type="checkbox" className="checkbox border-gray-50" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer ">
                    <span className="text-gray-100">Feminino</span>
                    <input type="checkbox" className="checkbox border-gray-50" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox