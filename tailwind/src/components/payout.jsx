export const Payouts = ({payouts,
    refunds
}) =>{
    return <div className="flex justify-start m-5">
        <div className="text-gray-600 rounded-full m-2 bg-gray-100 pr-3 pl-3 pt-2 pb-1">
            Payouts ({payouts})
        </div>
        <div className="bg-blue-700 text-sm text-white rounded-full  m-2 text-center pr-3 pl-3 pt-2 pb-1">
            Refunds ({refunds})
        </div>
    </div>
}