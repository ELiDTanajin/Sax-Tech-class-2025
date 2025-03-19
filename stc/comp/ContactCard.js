export default function ContactCard({ name,description}) {
    return (
        <div className="shadow-md flex items-center gap-[8px] rounded-[100px] bg-orange-200">
            <img src="/Profile1.png" 
            className="w-[48px] h-[48px] rounded-[100px]" />
            <div>
                <h2 className="text-[16px] font-bold">
                    {name}
                </h2>
                <p className="text-[12px] text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    )
}