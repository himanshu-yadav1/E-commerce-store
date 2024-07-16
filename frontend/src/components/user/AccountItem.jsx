import { Link } from "react-router-dom"

function AccountItem({ imageSrc, title, description, to }) {
    return (
        <Link to={to} className="flex flex-grow sm:w-[30%] p-3 border-2 sm:border border-gray-200 sm:hover:border-gray-300 shadow-sm hover:shadow-md cursor-pointer rounded-lg">
             <div className="flex items-center w-[30%] p-2">
                <img src={imageSrc} alt="" className="w-14"/>
            </div>

            <div className="flex flex-col justify-center w-[70%] px-2">
                <h3 className="text-lg">{title}</h3>
                <p className="text-slate-500 mt-2">{description}</p>
            </div>
            
        </Link>
    )
}

export default AccountItem
