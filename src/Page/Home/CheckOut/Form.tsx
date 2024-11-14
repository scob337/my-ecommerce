
const FormFC = () => {
    return (
        <form className="mt-5 grid gap-6">
            <div className="relative">
                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                    <img className="w-14 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKmaI8pBti08TdF5Mshy09CLie42PE15p5w&s" alt="" />
                    <div className="ml-5">
                        <span className="mt-2 font-semibold">Fedex Delivery</span>
                        <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                    </div>
                </label>
            </div>
            <div className="relative">
                <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                    <img className="w-14 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAKqpnRhDYRsX_7PwRZ8VCpX-XRUYYr0Qxw&s" alt="" />
                    <div className="ml-5">
                        <span className="mt-2 font-semibold">DHL Delivery</span>
                        <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                    </div>
                </label>
            </div>
        </form>
    )
}

export default FormFC
